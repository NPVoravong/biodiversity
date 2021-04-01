# Prompt
Create a interactive dashboard to explore the dataset that catalogs the microbes that colonize human navels.

# Dependencies
- Javascript
- D3
- Plotly
- HTML
- Bootstrap

# Process

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
7. Interactivity  
    Each component on the dashboard uses the variable i. When the change event for the drop down menu is triggered the i variable is replaced with the subject's id number. To generate the id number the `.property("value")` function is used. It reads the value data from the list that was dynamically generated from the JSON file.
    
Nested within custom `handleChange() ` function is another function `buildPlots(id)`. 
    
To see the dashboard in action visit this link [Biodiversity Dashboard](https://npvoravong.github.io/biodiversity/)
    
    
   







