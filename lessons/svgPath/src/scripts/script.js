import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select(".canva");

var revenueData = []
const svg = canvas.append("svg")
            .attr('width', 600)
            .attr('height', 600);

const margin = {top: 20, right: 20, bottom: 78, left: 40};
const graphWidth = 600 - margin.left - margin.right
const graphHeight = 600 - margin.top - margin.bottom

const mainCanvas = svg.append("g")
                .attr("width", graphWidth)
                .attr("height", graphHeight)
                .attr("transform", `translate(${margin.left}, ${margin.top})`);
var areaChart = d3.area()
                    .x( (d, i) => i * 40)                    
                    .y0(graphHeight)
                    .y1(graphHeight -d)

mainCanvas.append("path")
                .attr("fill'", "orange")
                .attr("class", "area")
                .attr("d", areaChart)

