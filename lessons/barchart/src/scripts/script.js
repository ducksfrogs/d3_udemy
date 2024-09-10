import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select(".canva");

const svg = canvas.append("svg")
                    .attr('height', 400)
                    .attr('width', 400);


const rect = svg.selectAll("rect");

d3.json("test.json")
        .then(data => {
                console.log(data);
                const y = d3.scaleLinear()
                                .domain([0, d3.max(data, d => d.height)])
                                .range([0, 250]);

                console.log(y(0));
                console.log(y(250));
                console.log(y(500));

            rect.data(data)
                    .enter().append("rect")
                    .attr("width", (d, i) => d.width)
                    .attr("height", (d, i) => y(d.height))
                    .attr("fill", (d) => d.fill)
                    .attr("x", (d, i) => i * 26)
                    
        })
