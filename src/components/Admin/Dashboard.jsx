import React from "react";
import LineChartDashboard from "./LineChartDashboard";
import Barchart from "./BarChart";
import StatisticsCard from "./StatisticsCard";

const Dashboard = () => {
  return (
    <div className="flex justify-center items-center flex-col mx-auto">
      <StatisticsCard />
      <LineChartDashboard />
      <Barchart />
    </div>
  );
};
export default Dashboard;
