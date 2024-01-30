// TimeSeries.js
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const TimeSeries = ({ data }) => {
    const chartRef = useRef();
    const zoomRef = useRef();
    const width = 600;
    const height = 300;

    useEffect(() => {
        const margin = { top: 20, right: 30, bottom: 30, left: 50 };

        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const xScale = d3.scaleLinear().range([0, width]);
        const yScale = d3.scaleLinear().range([height, 0]);

        const line = d3
            .line()
            .x((d) => xScale(d.x))
            .y((d) => yScale(d.y));

        xScale.domain([0, data.length - 1]);
        yScale.domain([0, d3.max(data, (d) => d.y)]);

        // Draw line
        svg.append('path').datum(data).attr('class', 'line').attr('d', line).attr('stroke', 'blue');

        // Add axes
        svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));
        svg.append('g').call(d3.axisLeft(yScale));

        // Add zoom behavior
        const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', handleZoom);

        function handleZoom(event) {
            const newTransform = event.transform;
            xScale.domain(newTransform.rescaleX(xScale).domain());

            // Redraw the line with the updated scale
            svg.select('.line').attr('d', line);

            // Update the x-axis
            svg.select('.x-axis').call(d3.axisBottom(xScale));
        }

        svg
            .append('rect')
            .attr('width', width)
            .attr('height', height)
            .style('fill', 'none')
            .style('pointer-events', 'all')
            .call(zoom);

        // Append x-axis separately to update during zoom
        svg.append('g').attr('class', 'x-axis').attr('transform', `translate(0,${height})`).call(d3.axisBottom(xScale));

        // Save the zoom behavior in the ref
        zoomRef.current = zoom;

        return () => {
            // Cleanup when component unmounts
            svg.remove();
        };
    }, [data]);

    const handleZoomIn = () => {
        d3.select(chartRef.current).select('rect').call(zoomRef.current.scaleBy, 1.2);
    };

    const handleZoomOut = () => {
        d3.select(chartRef.current).select('rect').call(zoomRef.current.scaleBy, 0.8);
    };

    const handlePanLeft = () => {
        d3.select(chartRef.current).select('rect').call(zoomRef.current.translateBy, -50, 0);
    };

    const handlePanRight = () => {
        d3.select(chartRef.current).select('rect').call(zoomRef.current.translateBy, 50, 0);
    };

    const handleReset = () => {
        d3.select(chartRef.current)
            .select('rect')
            .transition()
            .duration(500)
            .call(zoomRef.current.transform, d3.zoomIdentity); // Reset zoom

        // Reset scales
        const xScale = d3.scaleLinear().range([0, width]);
        xScale.domain([0, data.length - 1]);

        svg.select('.line').attr('d', line); // Redraw the line with the updated scale

        svg.select('.x-axis').call(d3.axisBottom(xScale)); // Update the x-axis
    };

    return (
        <div>
            <div ref={chartRef} style={{ width: `${width}px`, height: `${height}px`, overflowX: 'auto' }} />
            <div>
                <button onClick={handleZoomIn}>Zoom In</button>
                <button onClick={handleZoomOut}>Zoom Out</button>
                <button onClick={handlePanLeft}>Pan Left</button>
                <button onClick={handlePanRight}>Pan Right</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default TimeSeries;
