# Belly Button Biodiversity Dashboard

## Project Overview
This project visualizes the Belly Button Biodiversity dataset using interactive charts and a dashboard. The goal is to allow users to explore the dataset, displaying key insights about the bacterial species (OTUs) present in test subjects' navels. The dashboard includes:

- A **horizontal bar chart** showing the top 10 OTUs for the selected test subject.
- A **bubble chart** visualizing each sample's composition.
- A **demographic info panel** displaying metadata for the selected test subject.

This project demonstrates skills in data visualization, interactivity, and deployment using D3.js and Plotly.js.

## Features
1. **Horizontal Bar Chart**:
   - Displays the top 10 OTUs for the selected test subject.
   - Uses `sample_values` as the values for the bar chart.
   - Labels the bars with `otu_ids`.
   - Includes `otu_labels` as hovertext.

2. **Bubble Chart**:
   - Displays each OTU's presence in a sample.
   - Uses `otu_ids` for the x-axis and marker colors.
   - Uses `sample_values` for the y-axis and marker size.
   - Displays `otu_labels` as hovertext.

3. **Demographic Info Panel**:
   - Displays the test subject's metadata (e.g., age, gender, location, etc.).
   - Updates dynamically when a new test subject is selected.

4. **Dropdown Menu**:
   - Allows users to select a test subject ID.
   - Updates all charts and panels dynamically.

## Dataset
The dataset is provided as a JSON file and is loaded dynamically using D3.js:
- URL: `https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json`

## Technologies Used
- **HTML**: Provides the structure of the dashboard.
- **CSS (via Bootstrap)**: Ensures a responsive and clean layout.
- **JavaScript**:
  - **D3.js**: For data binding and manipulation.
  - **Plotly.js**: For creating interactive charts.
- **GitHub Pages**: For deployment.

## How to Use
1. Open the dropdown menu to select a test subject ID.
2. View the updated charts and demographic info panel.
3. Explore the top 10 OTUs and the composition of bacterial species for the selected test subject.

## Deployment
![image](https://github.com/user-attachments/assets/33ac33c2-fb61-409e-9b54-3e66bb2b7efa)
(file:///C:/Users/monse/OneDrive/Documentos/belly-button-challenge/Starter_Code/index.html).

