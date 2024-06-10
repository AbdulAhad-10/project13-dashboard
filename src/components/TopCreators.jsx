"use client";
import React from "react";
import { Table, Typography, Button, Progress } from "antd";
import avatar from "../public/avatar.png";
import Image from "next/image";

const { Title, Text } = Typography;

const data = [
  {
    key: "1",
    avatar: avatar,
    name: "@maddison_c21",
    artworks: 9821,
    rating: 90,
  },
  {
    key: "2",
    avatar: avatar,
    name: "@karl.will02",
    artworks: 7032,
    rating: 80,
  },
  {
    key: "3",
    avatar: avatar,
    name: "@andreea.1z",
    artworks: 5204,
    rating: 70,
  },
  {
    key: "4",
    avatar: avatar,
    name: "@abraham47.y",
    artworks: 4309,
    rating: 60,
  },
  {
    key: "5",
    avatar: avatar,
    name: "@simmmple.web",
    artworks: 3871,
    rating: 50,
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center">
        <Image
          src={record.avatar}
          className="mr-2 rounded-full"
          width={30}
          height={30}
          alt="avatar"
        />
        <Text className="font-semibold">{text}</Text>
      </div>
    ),
  },
  {
    title: "Artworks",
    dataIndex: "artworks",
    key: "artworks",
    align: "center",
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    align: "center",
    render: (rating) => (
      <Progress
        percent={rating}
        showInfo={false}
        strokeColor="#6C63FF"
        trailColor="#E0E0E0"
        strokeWidth={8}
      />
    ),
  },
];

const TopCreators = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[22px] text-[#1B254B] font-bold">Top Creators</h3>
        <Button
          type="link"
          className="text-[#6C63FF] text-[16px] rounded-2xl font-semibold bg-[#DFE7F7]"
        >
          See all
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="top-creators-table"
      />
    </div>
  );
};

export default TopCreators;
