import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

const canvas = d3.select(".canva");

const svg = canvas.append("svg")
                    .attr('height', 600)
                    .attr('width', 600);

const margin = {top: 20, right: 20, bottom: 78, left: 40};
const graphWidht = 600 - margin.left -margin.right
const graphHeight = 600 - margin.top - margin.bottom

const graph = svg.append("g")
                .attr("width", graphWidht)
                .attr("height", graphHeight)
                .attr("transform", `translate(${margin.left}, ${margin.top})`);

                console.log(graphHeight);
                console.log(graphWidht);
                console.log(graph);
const rect = graph.selectAll("rect");

const xAxisGroup = graph.append("g")
                        .attr("transform", `translate(0, ${graphHeight})`);
                        // .attr("transform", `translate(0, 300)`);

const yAxisGroup = graph.append("g");


d3.json("test.json")
        .then(data => {
                console.log(data);
                const y = d3.scaleLinear()
                                .domain([0, d3.max(data, d => d.height)])
                                .range([graphHeight, 0]);

                // console.log(y(0));
                // console.log(y(250));
                // console.log(y(500));

        const x = d3.scaleBand()
                        .domain(data.map(item => item.fill))
                        .range([0, 500])
                        .paddingInner(0.1);
                        // .paddingOuter(0.4);

        // console.log(x.bandwidth());

            rect.data(data)
                    .enter().append("rect")
                    .attr("width", x.bandwidth)
                    .attr("height", (d, i) => graphHeight - y(d.height))
                    .attr("fill", (d) => d.fill)
                    .attr("x", (d, i) => x(d.fill))
                    .attr("y", d => y(d.height)
                    )

                const xAxis = d3.axisBottom(x);
                const yAxis = d3.axisLeft(y);

                xAxisGroup.call(xAxis);
                yAxisGroup.call(yAxis);
                    
        })
