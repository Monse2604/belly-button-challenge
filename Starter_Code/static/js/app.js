console.log("app.js is connected and running!");

d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json")
  .then((data) => {
    console.log("JSON data loaded successfully:", data);

    // Cargar nombres en el menú desplegable
    const sampleNames = data.names;
    const dropdown = d3.select("#selDataset");
    sampleNames.forEach((sample) => {
      dropdown.append("option").text(sample).property("value", sample);
    });

    // Construir gráficos iniciales con el primer sample
    const firstSample = sampleNames[0];
    buildMetadata(firstSample);
    buildCharts(firstSample);
  })
  .catch((error) => {
    console.error("Error loading JSON data:", error);
  });

function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const metadata = data.metadata.filter(obj => obj.id == sample)[0];
    const panel = d3.select("#sample-metadata");
    panel.html("");
    Object.entries(metadata).forEach(([key, value]) => {
      panel.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
}

function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    const result = data.samples.filter(obj => obj.id == sample)[0];

    // Gráfico de barras
    const barData = [{
      x: result.sample_values.slice(0, 10).reverse(),
      y: result.otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse(),
      text: result.otu_labels.slice(0, 10).reverse(),
      type: "bar",
      orientation: "h"
    }];
    const barLayout = { title: "Top 10 OTUs Found" };
    Plotly.newPlot("bar", barData, barLayout);

    // Gráfico de burbujas
    const bubbleData = [{
      x: result.otu_ids,
      y: result.sample_values,
      text: result.otu_labels,
      mode: "markers",
      marker: { size: result.sample_values, color: result.otu_ids, colorscale: "Earth" }
    }];
    const bubbleLayout = { title: "OTU IDs vs Sample Values", xaxis: { title: "OTU ID" } };
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
}

function optionChanged(newSample) {
  buildMetadata(newSample);
  buildCharts(newSample);
}
