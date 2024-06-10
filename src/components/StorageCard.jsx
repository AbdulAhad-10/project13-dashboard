"use client";
import React from "react";
import { Card, Progress } from "antd";
import { CloudOutlined, EllipsisOutlined } from "@ant-design/icons";

const StorageCard = () => {
  return (
    <Card className="h-full rounded-xl w-[250px]">
      <div className="absolute top-4 right-4">
        <EllipsisOutlined className="text-[#6C63FF] text-2xl font-extrabold bg-[#F4F7FE] px-2 rounded-lg" />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center p-8 mb-4 bg-[#F4F7FE] rounded-full">
          <CloudOutlined className="text-5xl text-[#6C63FF]" />
        </div>
        <h1 className="text-2xl font-bold text-[#1B254B] text-center">
          Your storage
        </h1>
        <p className="text-center text-[#A0AEC0] text-lg">
          Supervise your drive space in the easiest way
        </p>
      </div>
      <div className="mt-28">
        <Progress
          strokeColor="#6C63FF"
          percent={51.2}
          showInfo={false}
          className="h-2"
        />
        <div className="flex justify-between mt-2">
          <p className="text-sm text-[#A0AEC0]">25.6 GB</p>
          <p className="text-sm text-[#A0AEC0]">50 GB</p>
        </div>
      </div>
    </Card>
  );
};

export default StorageCard;
