const   margin = { top: 10, right: 10, bottom: 10, left: 10 };``
const   width = 640 - margin.left - margin.right;
const   height = 400 - margin.top - margin.bottom;

// const data = FileAttachment("/data/abc.csv").csv({typed: "auto"});



const canvas = d3.select(".canva2");

const svg = canvas.append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "max-width: 100%; height: auto");

d3.csv('/data/abc.csv')
    .then(data => {
        const x = d3.scaleBand()
                    .domain(d3.groupSorr(data, ([d]) => -d.frequency, (d) => d.letter))
                    .range([margin.left, width - margin.right])
                    .padding(0.1);

        const y = d3.scaleLinear()
                    .domain([0, d3.max(data, (d) => d.frequency())])
                    .range([height - margin.bottom, margin.top]);
        svg.append("g")
            .attr("fill", "seelblue")
            .selectAll()
            .data(data)
            .join("rect")
                .attr("x", (d) => x(d.letter))
                .attr("y", (d) => y(d.frequency))
                .attr("height", (d) => y(0) - y(d.frequency))
                .attr("width", x.bandwidth());


    })