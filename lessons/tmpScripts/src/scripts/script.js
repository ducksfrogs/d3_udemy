import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select(".canva");



var margin = { top: 10, right: 10, bottom: 10, left: 10 },
    width = 960 - margin.left - margin.right,
    height = 640 - margin.top - margin.bottom;



var div = d3.select("body").append("div");

d3.csv("./data/yf.csv")
    .then(data => {
        console.log(data);
        const x = d3.scaleUtc(d3.extent(d => d.date), [margin.left, width - margin.right])
        const area = d3.area()
                        .x(x => x(d3.date))
                        .y0(y(0))
                        .y1(d => y(d.close));

        const svg = canvas.append("svg")
                        .attr("width", width)
                        .attr("height", height)
                        .attr("viewBox", [0, 0, width, height])
                        .attr("style", "max-width: 100%; height: auto");

        svg.append("path")
                .attr("fill", "steelblu")
                .attr("d", area(data));
    })