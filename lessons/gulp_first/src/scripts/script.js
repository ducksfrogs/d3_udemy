import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select(".canva");

const svg = canvas.append("svg")
                    .attr("width", 300)
                    .attr("height", 300);


const rect = svg.selectAll("rect");

const ddd = await d3.json('test.json');

console.log(ddd);

rect.data(ddd)
    .enter().append("rect")
    .attr('width', 25)
    .attr("height", d => d.height);

