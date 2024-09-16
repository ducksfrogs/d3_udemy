import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const canvas = d3.select(".canva");
d3.csv("./data/yf.csv").then(data => {
  const width = 928;
  const height = 500;
  const marginTop = 20;
  const marginRight = 30;
  const marginBottom = 30;
  const marginLeft = 40;

  // Declare the x (horizontal position) scale.
  const x = d3.scaleUtc(d3.extent(data, d => d.date), [marginLeft, width - marginRight]);
  console.log(x);
  // Declare the y (vertical position) scale.
  const y = d3.scaleLinear([0, d3.max(data, d => d.close)], [height - marginBottom, marginTop]);

  // Declare the area generator.
  const area = d3.area().x(d => x(d.date)).y0(y(0)).y1(d => y(d.close));

  // Create the SVG container.
  const svg = canvas.append("svg").attr("width", width).attr("height", height).attr("viewBox", [0, 0, width, height]).attr("style", "max-width: 100%; height: auto;");

  // Append a path for the area (under the axes).
  svg.append("path").attr("fill", "steelblue").attr("d", area(data));

  // Add the x-axis.
  svg.append("g").attr("transform", `translate(0,${height - marginBottom})`).call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

  // Add the y-axis, remove the domain line, add grid lines and a label.
  svg.append("g").attr("transform", `translate(${marginLeft},0)`).call(d3.axisLeft(y).ticks(height / 40)).call(g => g.select(".domain").remove()).call(g => g.selectAll(".tick line").clone().attr("x2", width - marginLeft - marginRight).attr("stroke-opacity", 0.1)).call(g => g.append("text").attr("x", -marginLeft).attr("y", 10).attr("fill", "currentColor").attr("text-anchor", "start").text("↑ Daily close ($)"));

  // console.log(data);

  // const x = d3.scaleUtc(d3.extent(data, d => d.date), [margin.left, width - margin.right]);
  // const y = d3.scaleLinear([0, d3.max(data, d => d.close)], [height - margin.bottom, margin.top]);
  // console.log(x);

  // const area = d3.area()
  //                 .x(d => x(d.date))
  //                 .y0(y(0))
  //                 .y1(d => y(d.close));

  // const svg = canvas.append("svg")
  //                 .attr("width", width)
  //                 .attr("height", height)
  //                 .attr("viewBox", [0, 0, width, height])
  //                 .attr("style", "max-width: 100%; height: auto");

  // svg.append("path")
  //         .attr("fill", "steelblue")
  //         .attr("d", area(data));

  // svg.append("g")
  //     .attr("transform", `translate(0, ${height - margin.bottom})`)
  //     .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0));

  // svg.append("g")
  //     .attr("transform", `translate(${margin.left}, 0)`)
  //     .call(d3.axisLeft(y).ticks(height / 40))
  //     .call(g => g.select(".domain").remove())
  //     .call(g => g.selectAll(".tick line").clone()
  //             .attr("x2", width - margin.left - margin.right)
  //             .attr("stroke-opacity", 0.1))
  //     .call(g => g.append("text")
  //             .attr("x", -margin.left)
  //             .attr("y", 10)
  //             .attr("fill", "currentColor")
  //             .attr("text-anchor", "start")
  //             .attr(" daily close ($)"))
});