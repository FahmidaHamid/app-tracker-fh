import { BarChart } from "@mui/x-charts/BarChart";

const SimpleChart = ({ dataToPlot }) => {
  //console.log("data to plot", dataToPlot);
  return (
    <BarChart
      xAxis={[
        {
          id: "rating_label",
          data: dataToPlot.map((d) => d.country),
          scaleType: "users choice",
        },
      ]}
      series={[
        {
          data: dataToPlot.map((d) => d.population),
        },
      ]}
      height={600}
      width={500} //Optional: if not provided, it expands to fill available space
      sx={{
        "& .MuiChartsAxis-directionX .MuiChartsAxis-tickLabel": {
          transform: "rotate(-45deg)",
          transformOrigin: "right center",
          textAnchor: "end",
        },
      }}
    />
  );
};

export default SimpleChart;
