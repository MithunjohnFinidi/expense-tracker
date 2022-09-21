import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value );
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {console.log(props.dataPoints)}
            {props.dataPoints.map( (datapoint) => <ChartBar key={datapoint.label} value={datapoint.value} maxValue={totalMax} label={datapoint.label}/>
            )}
        </div>
    )
};

export default Chart;