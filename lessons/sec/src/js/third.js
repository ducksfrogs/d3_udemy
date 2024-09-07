import * as d3 from 'd3';

const canvas = d3.select(".canva");

// var dataArray = [4, 15, 34, 124, 23];
var dataArray = [
    {width: 25, height: 15, fill: 'pinl'},
    {width: 25, height: 25, fill: 'pinl'},
    {width: 25, height: 115, fill: 'pinl'},
    {width: 25, height: 5, fill: 'pinl'},
    {width: 25, height: 35, fill: 'pinl'},
];

const svg = canvas.append("svg")
            // .attr('width', "50%")
            .attr("width", 500)
            .attr('height', 550);

const rect = svg.selectAll("rect");

rect.data(dataArray)
    .enter().append("rect")
    .attr("width", 25)
    .attr("height", function(d) {
    return d.height*2;
    })
    .attr("fill", "green")
    .attr("x", function(d , i) { 
        return i*27 } )
    .attr("y", function(d, i) {
        return 300 - (d.height*2);
    })                

console.log(rect);