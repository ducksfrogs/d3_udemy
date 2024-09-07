import * as d3 from 'd3';


const canvas = d3.select('.canva');

var width = 600;
var height = 600;
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson"

const svg = canvas.append('svg')
            .attr("width", width)
            .attr("height", height);


d3.json(api_url)
    .then(data => {
        const circle = svg.selectAll("circle")
                        .data(data.features);


            
        console.log(data.features);
        circle.attr("cx", (d, i) => d.properties.mag)
                .attr("cy", 14)
                .attr("r", 14)
                .attr("fill", "green");

        circle.enter()
                .append("circle")
                .attr("cx", (d, i) => (d.properties.mag)*23)
                .attr("cy", 14)
                .attr("r", (d, i) => (d.properties.mag)*4)
                .attr("fill", "green");
    })