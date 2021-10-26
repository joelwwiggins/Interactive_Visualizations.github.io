function getPlots(id) {
    //Read samples.json
        d3.json("./data/samples.json").then(function(sampledata){
            console.log(sampledata)
            var samples =data.samples.filter(sampleid=>sampleid.id.toString()===id)[0];
            console.log(samples);

            var sampleValues=samples.sample_values;
            var otuIds=samples.otu_ids;
            var labels=samples.sample_labels;

            var sampleValuest10=sampleValues.slice(0,10);
            var otuIdst10=otuIds.slice(0,10);
            var labelst10=labels.slice(0,10);

            var trace1={

                x: sampleValuest10,
                y: otuIdst10,

                type : "bar",
                hoverttext:labels.slice(0,10),
                marker:{
                    color: "red",
                line:{
                    color: "blue",
                    
                }

                },
                orientation: "h"
            }
            var plotdata=[trace1];
            var layout1={
                title:"OTU Bar Chart"
            };
            Plotly.newPlot("bar",plotdata,layout1);

            var trace2 ={

                x: otuIds,
                y: sampleValues,

                mode:'markers',
                marker: {
                    color: otuIds
                    size: sampleValues
                },
                text:labels

            };
            var data2=[trace2];
            var layout2={
                margin: {t:50,r:10,l:10,b:50},
                title: 'ID',
                height: 600,
                width: 1000,

            };
            Plotly.newplot('bubble',data2,layout2);


        });
}
function Metainfo(id){
    d3.json('data/samples.json').then(function(data){
        if (id==undefined){exit;}

        var idInput=data.names.indexOf(id);
        var metadata=data.metadata[idInput];
        var panel=d3.select('.panel-body');
        panel.html("");

        var dataentries=Object.entries(metadata);
        dataEntries.forEach(function([key,value]){
            var row=panel.append('p')
            .text(`\t${key.toUpperCase()}:${value}`);

        });
    });
}       

funtion guagechart(id){
    d3.json('data/samples.json').then(function(data){

        var 

    })
}