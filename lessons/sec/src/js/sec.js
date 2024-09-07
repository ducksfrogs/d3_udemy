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



rect.attr("width", 20)
    .data(dataArray)
    .attr("height", 100)
    .attr("fill", "green")
    // .attr("y", function(d, i) {
    //     console.log(i);
    //     return d;
    // })
    .attr("x", function(d , i) { 
        console.log(d);
        return i*24 } );
                    

console.log(rect);