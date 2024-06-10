"use client";
import React from "react";
import { Table, Tag, Progress } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  EllipsisOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const data = [
  {
    key: "1",
    name: "Marketplace",
    status: "Approved",
    date: "18 Apr 2022",
    progress: 90,
    statusColor: "green",
    icon: <CheckCircleOutlined />,
  },
  {
    key: "2",
    name: "Marketplace",
    status: "Disable",
    date: "18 Apr 2022",
    progress: 30,
    statusColor: "red",
    icon: <CloseCircleOutlined />,
  },
  {
    key: "3",
    name: "Marketplace",
    status: "Error",
    date: "20 May 2021",
    progress: 70,
    statusColor: "orange",
    icon: <ExclamationCircleOutlined />,
  },
  {
    key: "4",
    name: "Marketplace",
    status: "Approved",
    date: "12 Jul 2021",
    progress: 50,
    statusColor: "green",
    icon: <CheckCircleOutlined />,
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "STATUS",
    dataIndex: "status",
    key: "status",
    render: (_, record) => (
      <span className="flex items-center">
        <span className={`text-${record.statusColor}-500 text-lg mr-2`}>
          {record.icon}
        </span>
        <span>{record.status}</span>
      </span>
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

const ComplexTable = () => {
  return (
    <div className="h-full p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[22px] font-bold text-[#1B254B]">Complex Table</h2>
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

export default ComplexTable;
