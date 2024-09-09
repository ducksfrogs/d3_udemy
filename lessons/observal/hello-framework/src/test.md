# test

## hash2


```js
const h = FileAttachment("./data/test.json").json();
```

```js
console.log(h);
```
<div class="canva"> </div>

```js

const canvas = d3.select(".canva");
const svg = canvas.append("svg");

const rect = svg.selectAll("rect");
rect.data(h)
    .enter().append("rec")
    .attr("width", 25)
    .attr("height", d => d.height)

```
<!-- ```js
display(
    console.log(h);
)
``` -->
