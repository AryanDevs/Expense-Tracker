import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const allValues = props.dataPoints.map((datapoint) => datapoint.value);
  const mv = Math.max(...allValues);

  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return (
          <ChartBar
            id={datapoint.id}
            value={datapoint.value}
            label={datapoint.label}
            maxValue={mv}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
