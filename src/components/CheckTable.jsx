"use client";
import React from "react";
import { Card, Table, Checkbox, Progress } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    name: "Horizon UI PRO",
    progress: 17.5,
    quantity: 2458,

    date: "12 Jan 2021",
    checked: false,
  },
  {
    key: "2",
    name: "Horizon UI Free",
    progress: 10.8,
    quantity: 1485,
    date: "21 Feb 2021",
    checked: true,
  },
  {
    key: "3",
    name: "Weekly Update",
    progress: 21.3,
    quantity: 1024,
    date: "13 Mar 2021",
    checked: true,
  },
  {
    key: "4",
    name: "Venus 3D Asset",
    progress: 31.5,
    quantity: 858,
    date: "24 Jan 2021",
    checked: true,
  },
  {
    key: "5",
    name: "Marketplace",
    progress: 12.2,
    quantity: 258,
    date: "24 Oct 2022",
    checked: false,
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PROGRESS",
    dataIndex: "progress",
    key: "progress",
    render: (progress) => (
      <Progress strokeColor="#6C63FF" percent={progress} size="small" />
    ),
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
];

const CheckTable = () => {
  const onChange = (e, record) => {
    console.log(`checked = ${e.target.checked}`);
    record.checked = e.target.checked;
  };

  const enhancedDataSource = dataSource.map((item) => ({
    ...item,
    name: (
      <Checkbox checked={item.checked} onChange={(e) => onChange(e, item)}>
        {item.name}
      </Checkbox>
    ),
  }));

  return (
    <Card className="rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[22px] text-[#1B254B] font-bold">Check Table</h3>
        <EllipsisOutlined className="text-[#6C63FF] text-2xl font-extrabold bg-[#F4F7FE] px-2 rounded-lg" />
      </div>
      <Table
        dataSource={enhancedDataSource}
        columns={columns}
        pagination={false}
      />
    </Card>
  );
};

export default CheckTable;
