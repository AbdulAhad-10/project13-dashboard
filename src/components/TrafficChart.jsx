"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Card, Typography } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Title: AntTitle, Text } = Typography;

const data = {
  labels: ["00", "04", "08", "12", "14", "16", "18"],
  datasets: [
    {
      label: "Visitors",
      data: [5, 19, 7, 5, 4, 3, 10],
      backgroundColor: "#6C63FF",
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
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
    },

    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const TrafficChart = () => {
  return (
    <Card className="flex flex-col justify-between h-full bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <Text className="font-semibold text-gray-500">Daily Traffic</Text>
        <Text className="text-green-500">+2.45%</Text>
      </div>

      <div className="flex items-center gap-1 mb-5">
        <AntTitle level={2} className="m-0 font-bold text-gray-900">
          2.579
        </AntTitle>
        <Text className="text-gray-500">Visitors</Text>
      </div>

      <div className="h-96">
        <Bar data={data} options={options} />
      </div>
    </Card>
  );
};

export default TrafficChart;
