import * as d3 from 'd3';

const canvas = d3.select(".canva");

var dataArray = [4, 15, 34];

// const svg = canvas.append("svg")
//             // .attr('width', "50%")
//             .attr("width", 500)
//             .attr('height', 550);

const svg = canvas.select("svg")


const rect = svg.selectAll("rect");
// const rect = svg.append("rect");


    // .attr("y", function(d, i) {
    //     console.log(i);
    //     return d;
    // })

rect.attr("width", 25)
    .data(dataArray)
    .attr("height", function(d) {
        return d * 2;
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