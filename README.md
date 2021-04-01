# Prompt
Create a interactive dashboard to explore the dataset that catalogs the microbes that colonize human navels.

# Process

### Dependencies
- Javascript
- D3
- Plotly
- HTML
- Bootstrap

1. Intial Setup

    The dashboard will be made of the following:
      - Bootstrap Jumbotron
      - Id Dropdown
      - Demographic Info Panel
      - Bar Plot
      - Bubble Plot

    Bootstrap will be used to arrange the elements on the page. Each component requires its own div within the `index.html` for the plotly charts and javascript functions to         reference.

    Since the data source won't change for the project the variable for it will be set up as a const as such
    ```
    const dataset = d3.json("data/samples.json");
    ```
    The dataset variable will be used throughout the various functions to provide the metadata for the plots and dropdowns.

2. Id Dropdown and Demographic Panel

    

    

4. Bar Plot
    The bar plot will show the count for each OTU or Operatinal Taxonomic Unit. Each person in study will have different OTUs.
    

6. Bubble Plot
7. Interactvity  
    Each component on the dashboard uses the variable i. When the change event for the drop down is triggered the i variable is replaced with the subject's id number. This           change event also triggers the various functions that build the plots and demographic panel. The id is connected to the dropdown by reading the current value of the dropdown as such
    ```
    let id = dropDown.property("value");
    ```







