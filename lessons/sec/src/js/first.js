import * as d3 from 'd3';

const canvas = d3.select(".canva");

const svg = canvas.append("svg")
            // .attr('width', "50%")
            .attr("width", 500)
            .attr('height', 550);



// svg.append('circle').attr("cx", 100)
//                     .attr("cy", 100)
//                     .attr("r", 80)
//                     .attr("fill", "blue");

// svg.append("rect")
//             .attr("width", 10)
//             .attr("height", 50)
//             .attr("x", 250)
//             .attr("y", 50)
//             .attr("fill", "green");

// svg.append("line")
//             .attr("x1", 129)
//             .attr("x2", 45)
//             .attr("y1", 300)
//             .attr("y2", 34)
//             .attr("stroke", "gray")

svg.append("text")
    .text("Hello there")
    .attr("text-anchor", "start")
    .attr("fill", "green")
    .attr('stroke', 'yellow')
    .attr("font-size", 60)
    .attr("x", 100)
    .attr("y", 150);

svg.append("text")
    .text("James")
    .attr("text-anchor", "middle")
    .attr("fill", "green")
    .attr("font-size", 60)
    .attr("x", 100)
    .attr("y", 250);

svg.append("text")
    .text("momomo!")
    .attr("text-anchor", "end")
    .attr("fill", "green")
    .attr("font-size", 60)
    .attr("x", 100)
    .attr("y", 350);