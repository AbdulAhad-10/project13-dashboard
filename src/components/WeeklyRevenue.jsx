// "use client";

// import { Bar } from "react-chartjs-2";
// import { Card, Typography } from "antd";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { BarChartOutlined, CalendarOutlined } from "@ant-design/icons";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const { Text } = Typography;

// const WeeklyRevenue = () => {
//   const data = {
//     labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
//     datasets: [
//       {
//         label: "Revenue",
//         data: [50, 60, 70, 80, 90, 100, 110, 120, 130],
//         backgroundColor: [
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//         ],
//         borderColor: [
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//           "#00BFFF",
//         ],
//         borderWidth: 1,
//       },
//       {
//         label: "Forecast",
//         data: [80, 90, 100, 110, 120, 130, 140, 150, 160],
//         backgroundColor: [
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//         ],
//         borderColor: [
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//           "#6C63FF",
//         ],

//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//     },
//   };

//   return (
//     <Card className="rounded-lg shadow-md">
//       <div className="flex items-center justify-between mb-4">
//         <div className="flex items-center">
//           <Text className="text-lg text-[#1B254B]">Weekly Revenue</Text>
//         </div>
//         <BarChartOutlined className="text-2xl text-[#6C63FF]" />
//       </div>
//       <Bar data={data} options={options} />
//     </Card>
//   );
// };

// export default WeeklyRevenue;

"use client";
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
import { BarChartOutlined } from "@ant-design/icons";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const { Text } = Typography;

const WeeklyRevenue = () => {
  const data = {
    labels: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    datasets: [
      {
        label: "Revenue",
        data: [30, 50, 40, 30, 60, 30, 40, 20, 50],
        backgroundColor: "#6C63FF",
        borderColor: "#6C63FF",
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 12,
      },
      {
        label: "Forecast",
        data: [60, 80, 70, 60, 90, 60, 70, 50, 80],
        backgroundColor: "#00BFFF",
        borderColor: "#00BFFF",
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 12,
      },

      {
        label: "Product",
        data: [90, 110, 100, 90, 110, 90, 100, 80, 110],
        backgroundColor: "#EFF4FB",
        borderColor: "#EFF4FB",
        borderWidth: 1,
        borderRadius: 10,
        barThickness: 12,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        display: false,
      },
    },
  };

  return (
    <Card className="h-full bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Text className="text-lg text-[#1B254B] font-bold">
            Weekly Revenue
          </Text>
        </div>
        <BarChartOutlined className="text-2xl text-[#6C63FF]" />
      </div>
      <Bar data={data} options={options} />
    </Card>
  );
};

export default WeeklyRevenue;
