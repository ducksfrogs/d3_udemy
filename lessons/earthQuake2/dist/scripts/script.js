import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const canvas = d3.select(".canva");
var width = 600;
var height = 600;
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson";
const svg = canvas.append('svg').attr("width", width).attr("height", height);
d3.json(api_url).then(data => {
  const circle = svg.selectAll("circle").data(data.features);

  // console.log(data.features);
  circle.attr("cx", (d, i) => d.properties.mag).attr("cy", (d, i) => Math.floor(Math.random() * 100 + d.properties.mag)).attr("r", (d, i) => d.properties.mag).attr("fill", (d, i) => d.properties.alert);
  circle.enter().append("circle").attr("cx", (d, i) => d.properties.mag * 23).attr("cy", (d, i) => Math.floor(Math.random() * 100 + d.properties.mag)).attr("r", (d, i) => d.properties.mag).attr("r", function (d, i, node) {
    // console.log(d3.select(node[i]));
    return d.properties.mag;
  }).style('top', 125)
  // .on("mouseover", function (d, i, node) {
  //         console.log(d3.select(node[i]));
  //         d3.select(node[i]) .transition()
  //         .duration(100)
  //         .style("opacity", 0.5)}
  // )
  .on("mouseover", handleMouseOver).attr("fill", (d, i) => d.properties.alert);
  function handleMouseOver(event) {
    console.log(event);
    d3.select(event.currentTarget).style("opacity", 0.3);
  }
});