# my first obeservable

<div class="canva"></div>

```js
const   margin = { top: 10, right: 10, bottom: 10, left: 10 };``
const   width = 640 - margin.left - margin.right;
const   height = 400 - margin.top - margin.bottom;

const canvas = d3.select('.canva');

const x = d3.scaleUtc()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")])
        .range([margin.left, width - margin.right]);

const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height - margin.bottom, margin.top]);

const svg = canvas.append("svg")
                    .attr("width", 640)
                    .attr("height", 400);


svg.append("g")
    .attr('transform', `translate(0, ${height - margin.bottom})` )
    .call(d3.axisBottom(x));

svg.append("g")
    .attr('transform', `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y));

```

## second 

<div class="canva2"></div>

```js
const data = FileAttachment("/data/abc.csv").csv({typed: "auto"});

console.log(data);
const x = d3.scaleBand()
            .domain(d3.groupSort(data, ([d]) => -d.frequency, (d) => d.letter))
            .range([margin.left, width - margin.right])
            .padding(0.1);

const y = d3.scaleLinear()
            .domain([0, d3.max(data, (d) => d.frequency)])
            .range([height - margin.bottom, margin.top]);


const canvas = d3.select("./canva2");

const svg = canvas.append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "max-width: 100%; height: auto");

svg.append("g")
    .attr("fill", "seelblue")
    .selectAll()
    .data(data)
    .join("rect")
        .attr("x", (d) => x(d.letter))
        .attr("y", (d) => y(d.frequency))
        .attr("height", (d) => y(0) - y(d.frequency))
        .attr("width", x.bandwidth());


```