"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Card, Typography } from "antd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const { Title: AntTitle, Text } = Typography;

const data = {
  labels: ["Your files", "System"],
  datasets: [
    {
      data: [63, 25, 12],
      backgroundColor: ["#6C63FF", "#00BFFF", "#EFF4FB"],
      hoverBackgroundColor: ["#6C63FF", "#00BFFF", "#EFF4FB"],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const PieChart = () => {
  return (
    <Card className="h-full bg-white rounded-xl ">
      <div className="flex items-center justify-between mb-4">
        <Text className="text-[#1B254B] font-semibold ">Your Pie Chart</Text>
        <Text className="text-gray-500">Yearly</Text>
      </div>
      <div className="mb-4 h-96">
        <Pie data={data} options={options} />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <div className="w-3 h-3 mr-2 bg-blue-600 rounded-full"></div>
          <Text className="text-gray-500">Your files</Text>
        </div>
        <Text className="font-semibold text-gray-900">63%</Text>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 mr-2 rounded-full bg-cyan-400"></div>
          <Text className="text-gray-500">System</Text>
        </div>
        <Text className="font-semibold text-gray-900">25%</Text>
      </div>
    </Card>
  );
};

export default PieChart;
