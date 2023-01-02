import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  // transforming a dataPoint object to just a number, map will return an array of this values (12 values)
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // Math.max requires a list of an arguments instead of an array, so we can use spread operator to pull out all array elements
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
