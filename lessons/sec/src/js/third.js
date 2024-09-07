import * as d3 from 'd3';

const canvas = d3.select(".canva");

var dataArray = [4, 15, 34, 124, 230];

const svg = canvas.select("svg")

const rect = svg.selectAll("rect");

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 25)
    .attr("height", function(d) {
    return d*2 ;

    })
    .attr("fill", "green")
    .attr("x", function(d , i) { 
        console.log(i);
        console.log(d);
        return i*27 } )
    .attr("y", function(d, i) {
        return 100 - (d*2);
    })                

console.log(rect);