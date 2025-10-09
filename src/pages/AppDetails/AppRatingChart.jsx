import React from "react";
//import { BarChart, Bar, ResponsiveContainer } from "recharts";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AppRatingChart = ({ dataToManipulate }) => {
  console.log("app rating chart...", dataToManipulate);
  return (
    <div style={{ width: "80%", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={dataToManipulate}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppRatingChart;
