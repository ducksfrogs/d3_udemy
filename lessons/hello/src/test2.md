# test third
<div class="canva"> </div>

```js

 var dataset = [
    [1, 15],
    [5, 25],
    [25, 30],
    [85, 40],
    [100, 42],
    [220, 40],
    [250, 50],
    [330, 95],
    [410, 30],
    [475, 44],
    [480, 50]
  ];
 
  var width = 400; // グラフの幅
  var height = 300; // グラフの高さ
  var margin = { "top": 30, "bottom": 60, "right": 30, "left": 60 };
 
  // 2. SVG領域の設定
  var svg = d3.select(".canva").append("svg").attr("width", width).attr("height", height);
 
  // 3. 軸スケールの設定
  var xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[0]; })])
    .range([margin.left, width - margin.right]);
 
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
    .range([height - margin.bottom, margin.top]);
 
  // 4. 軸の表示
  var axisx = d3.axisBottom(xScale).ticks(5);
  var axisy = d3.axisLeft(yScale).ticks(5);
 
  svg.append("g")
    .attr("transform", "translate(" + 0 + "," + (height - margin.bottom) + ")")
    .call(axisx)
    .append("text")
    .attr("fill", "black")
    .attr("x", (width - margin.left - margin.right) / 2 + margin.left)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("font-size", "10pt")
    .attr("font-weight", "bold")
    .text("X Label");
 
  svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + 0 + ")")
    .call(axisy)
    .append("text")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("x", -(height - margin.top - margin.bottom) / 2 - margin.top)
    .attr("y", -35)
    .attr("transform", "rotate(-90)")
    .attr("font-weight", "bold")
    .attr("font-size", "10pt")
    .text("Y Label");
 
  // 5. エリアの表示
  svg.append("path")
    .datum(dataset)
    .attr("fill", "rgba(70, 130, 180, 0.3)")
    .attr("d", d3.area()
      .x(function(d) { return xScale(d[0]); })
      .y1(function(d) { return yScale(d[1]); })
      .y0(yScale(0))
    );
 
  svg.append("path")
    .datum(dataset)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) { return xScale(d[0]); })
      .y(function(d) { return yScale(d[1]); })
    );
```