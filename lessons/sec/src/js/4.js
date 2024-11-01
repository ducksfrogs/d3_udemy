import * as d3 from 'd3';

const canvas = d3.select(".canva");


const svg = canvas.append("svg")
            // .attr('width', "50%")
            .attr("width", 500)
            .attr('height', 550);

const rect = svg.selectAll("rect");

d3.json('test.json')
    .then(data => {
        console.log(data);
    });

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 25)
    .attr("height", d => d.height*2)
    .attr("fill", function(d){
        return d.fill;

    })
    .attr("x", (d , i) => i*27)
    .attr("y", (d, i)  => 300 -d.height*2);                
