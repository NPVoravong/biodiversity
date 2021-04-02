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

2. Interactivity  
    In order to be built dynamically each component on the dashboard uses the variable i. The variable gets defined when the change event for the drop down menu is triggered. Another variable id holds every test subject id. 
    ```
    function handleChange() {
    let id = dropDown.property("value");
    buildPlots(id);
    };
    ```
    
   The `buildPlots(id)` function uses the id variable to help generate the i value. All of the test subject id numbers are stored in the names array. Using the value generated from `dropDown.property("value")` we can search the for the index poistion of that id value using `indexOf(id)`. For example one of the id numbers is 940 and when that is passed through the index function we get the an postion of zero. Each array within the JSON file is arranged in the same order. So getting the index of the id in the names array will allow us to access data from the samples array at the same index position. That's how each component of the dashboard will be dynamically built. 
   
3. Id Dropdown and Demographic Panel

    To add all the subject ids at once D3 is used to manipulate the DOM. The dropdown is selected using `d3.select` and then various function are chained to that selection. The subject ids are loaded from the JSON file and then they are appended to a list along with the value attribute. It looks like the following:
    ```
    dropDown.selectAll("option")
      .data(data.names)
      .enter()
      .append("option")
      .text(d => d)
      .attr("value", d => d);
    ```
    
4. Bar Plot
    The bar plot will show the count for each OTU or Operatinal Taxonomic Unit. Each person in study will have different OTUs.
    

5. Bubble Plot

   
    To see the dashboard in action visit this link [Biodiversity Dashboard](https://npvoravong.github.io/biodiversity/)
    
    
   







