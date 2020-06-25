import React from "react";
import C3Chart from "react-c3js";
import "c3/c3.css";

function DonutChart({ chartData }) {
    console.log(chartData);
    if (!chartData) {
        return <div>Here is chart section</div>;
    } else {
        return <C3Chart data={chartData}></C3Chart>;
    }
}

export default DonutChart;
