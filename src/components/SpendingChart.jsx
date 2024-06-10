"use client";
import React from "react";
import { Card, Typography } from "antd";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title as ChartTitle,
  Tooltip,
  Legend,
} from "chart.js";
import {
  CalendarOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  ChartTitle,
  Tooltip,
  Legend
);

const { Title, Text } = Typography;

const data = {
  labels: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
  datasets: [
    {
      label: "Dataset 1",
      data: [15, 20, 15, 20, 15, 20],
      borderColor: "#6C63FF",
      backgroundColor: "rgba(108, 99, 255, 0.2)",
      fill: true,
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 4,
    },
    {
      label: "Dataset 2",
      data: [10, 15, 10, 15, 10, 15],
      borderColor: "#00BFFF",
      backgroundColor: "rgba(0, 191, 255, 0.2)",
      fill: true,
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 4,
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
      beginAtZero: true,
    },
  },
};

const SpendingChart = () => {
  return (
    <Card className="h-full bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <CalendarOutlined className="mr-2 text-2xl text-[#6C63FF]" />
          <Text className="text-lg text-[#6C63FF]">This month</Text>
        </div>
        <BarChartOutlined className="text-2xl text-[#6C63FF]" />
      </div>

      <div className="flex justify-between">
        <div>
          <Title level={2} className="m-0 font-bold text-gray-900">
            $37.5K
          </Title>
          <Text className="text-gray-500">Total Spent</Text>
          <div className="flex items-center mt-2">
            <Text className="mr-2 text-green-500">+2.45%</Text>
            <CheckCircleOutlined className="text-green-500" />
            <Text className="ml-2 text-gray-500">On track</Text>
          </div>
        </div>
        <div className="mt-5 h-52">
          <Line data={data} options={options} />
        </div>
      </div>
    </Card>
  );
};

export default SpendingChart;
