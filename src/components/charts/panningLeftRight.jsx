// PanningLeftRight.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const PanningLeftRight = ({ data }) => {
    const chartRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const margin = { top: 20, right: 30, bottom: 30, left: 50 };
        const width = 600 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;

        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear().range([0, width]);
        const yScale = d3.scaleLinear().range([height, 0]);

        // Parse the data
        data.forEach((d) => {
            d.x = +d.x;
            d.y = +d.y;
        });

        xScale.domain(d3.extent(data, (d) => d.x)).nice();
        yScale.domain(d3.extent(data, (d) => d.y)).nice();

        // Draw line
        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));

        svg
            .append('path')
            .datum(data)
            .attr('class', 'line')
            .attr('d', line)
            .attr('stroke', 'green')
            .attr('stroke-width', 2)
            .attr('fill', 'none');

        // Draw dots
        svg
            .selectAll('dot')
            .data(data)
            .enter()
            .append('circle')
            .attr('cx', (d) => xScale(d.x))
            .attr('cy', (d) => yScale(d.y))
            .attr('r', 5)
            .attr('fill', 'steelblue');

        // Create zoom behavior for panning left/right
        const zoom = d3
            .zoom()
            .scaleExtent([1, 8])
            .on('zoom', handleZoom);

        function handleZoom(event) {
            const transform = event.transform;
            xScale.domain(transform.rescaleX(xScale).domain()); // Adjust x-axis domain based on zoom
            svg.select('.line').attr('d', line); // Update the line path
            svg.selectAll('circle').attr('cx', (d) => xScale(d.x)); // Update circle positions
            svg.select('.x-axis').call(d3.axisBottom(xScale)); // Update x-axis
        }

        // Append x-axis
        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        // Apply zoom behavior to the SVG container
        d3.select(containerRef.current).call(zoom);
    }, [data]);

    return (
        <div ref={containerRef} style={{ width: '600px', height: '400px' }}>
            <div ref={chartRef}></div>
        </div>
    );
};

export default PanningLeftRight;
