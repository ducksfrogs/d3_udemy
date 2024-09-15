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

<div class="canva></div>

```js

```