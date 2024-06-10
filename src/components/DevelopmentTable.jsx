"use client";
import { Table, Progress } from "antd";
import {
  AppleOutlined,
  EllipsisOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Marketplace",
    tech: [
      <AppleOutlined key="apple" className="text-gray-500" />,
      <WindowsOutlined key="windows" className="text-gray-500" />,
    ],
    date: "12.Jan.2021",
    progress: 75.5,
  },
  {
    key: "2",
    name: "Venus DB PRO",
    tech: [<AppleOutlined key="apple" className="text-gray-500" />],
    date: "21.Feb.2021",
    progress: 35.4,
  },
  {
    key: "3",
    name: "Venus DS",
    tech: [
      <AppleOutlined key="apple" className="text-gray-500" />,
      <WindowsOutlined key="windows" className="text-gray-500" />,
    ],
    date: "13.Mar.2021",
    progress: 25,
  },
  {
    key: "4",
    name: "Venus 3D Asset",
    tech: [
      <AppleOutlined key="apple" className="text-gray-500" />,
      <WindowsOutlined key="windows" className="text-gray-500" />,
    ],
    date: "24.Jan.2021",
    progress: 100,
  },
  {
    key: "5",
    name: "Marketplace",
    tech: [
      <AppleOutlined key="apple" className="text-gray-500" />,
      <WindowsOutlined key="windows" className="text-gray-500" />,
    ],
    date: "Oct 24, 2022",
    progress: 75.5,
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "TECH",
    dataIndex: "tech",
    key: "tech",
    render: (tech) => (
      <div className="flex space-x-2">
        {tech.map((icon, index) => (
          <span key={index}>{icon}</span>
        ))}
      </div>
    ),
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "PROGRESS",
    dataIndex: "progress",
    key: "progress",
    render: (progress) => (
      <Progress
        percent={progress}
        showInfo={false}
        strokeColor="#6C63FF"
        trailColor="#E3E3E3"
      />
    ),
  },
];

const DevelopmentTable = () => {
  return (
    <div className="h-full p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-bold text-[#1B254B]">
          Development Table
        </h2>
        <EllipsisOutlined className="text-[#6C63FF] text-2xl font-extrabold bg-[#F4F7FE] px-2 rounded-lg" />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={false}
        rowClassName="bg-white"
      />
    </div>
  );
};

export default DevelopmentTable;
