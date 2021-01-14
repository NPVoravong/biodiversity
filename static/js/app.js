const dataset = d3.json("data/samples.json");

let dropDown = d3.select("#selDataset");
dropDown.on("change", handleChange);

//Adds IDs to Dropdown
function addIdNum (){dataset.then((data) => {
    // console.log(data.names);
    var dropDown = d3.select("select");
    dropDown.selectAll("option")
      .data(data.names)
      .enter()
      .append("option")
      .text(d => d)
      .attr("value", d => d);
  });
};

function handleChange() {
let id = dropDown.property("value");
buildPlots(id);
};

function buildPlots(id){
    dataset.then((data) => {
        let id = dropDown.property("value");
        let name = data.names
        i = name.indexOf(id)
        // console.log(i)
        buildBarPlot(i);
        buildBubble(i);
        buildPanel(i);
    });
};

function buildBarPlot(i){
    dataset.then(Plot);
    function Plot(data){
        let d = data.samples[i]
        let otuIDs = d.otu_ids;
        let hoverText = d.otu_labels;
        let xValues = d.sample_values;

        let yValues = otuIDs.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let trace = {
            x: xValues.slice(0, 10).reverse(),
            y: yValues,
            text: hoverText.slice(0, 10).reverse(),
            type: 'bar',
            orientation: 'h',
            };
    
        let plotData = [trace];

        var layout = {
            title: 'Top 10 OTUs',
            showlegend: false,
            margin: { t: 30, l: 150 },
        };

        Plotly.newPlot("bar", plotData, layout)
        };
};


function buildPanel(i){
    dataset.then((data) => {
        let panel = d3.select("#sample-metadata");
        panel.html("");
        Object.entries(data.metadata[i]).forEach(([key, value]) =>{
        panel.append("p").text(`${key.toUpperCase()}: ${value}`)
        });
    });
};

function buildBubble(i){
    dataset.then(Plot);
    function Plot(data){
        
        let bubbleX = data.samples.map((d) => d.otu_ids);
        let bubbleY = data.samples.map((d) => d.sample_values);
        let bubbleMarker = data.samples.map((d) => d.sample_values);
        let bubbleColor = data.samples.map((d) => d.otu_ids);
        let bubbleText = data.samples.map((d) => d.otu_labels);
    
        let trace = {
            x: bubbleX[i],
            y: bubbleY[i],
            mode: 'markers',
            text: bubbleText[i],
            marker: {
              size: bubbleMarker[i],
              color: bubbleColor[i],
              colorscale: 'Portland',
            }
          };
          
          let plotData = [trace];
          
          let layout = {
            title: "OTUs Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30}
          };
          
          Plotly.newPlot('bubble', plotData,layout);
    };
};


addIdNum();

dropDown.dispatch("change",buildPlots);
