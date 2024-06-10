"use client";
import React from "react";
import { Button, List } from "antd";
import Image from "next/image";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";

const historyData = [
  {
    title: "Colorful Heaven",
    author: "Mark Benjamin",
    image: img1,
    price: "0.91 ETH",
    time: "30s ago",
  },
  {
    title: "Abstract Colors",
    author: "Esthera Jackson",
    image: img2,
    price: "0.91 ETH",
    time: "58s ago",
  },
  {
    title: "ETH AI Brain",
    author: "Nick Wilson",
    image: img3,
    price: "0.91 ETH",
    time: "1m ago",
  },
  {
    title: "Swipe Circles",
    author: "By Peter Will",
    image: img4,
    price: "0.91 ETH",
    time: "30s ago",
  },
  {
    title: "Colorful Heaven",
    author: "By Mark Benjamin",
    image: img5,
    price: "0.91 ETH",
    time: "58s ago",
  },
  {
    title: "3D Cubes Art",
    author: "By Manny Gates",
    image: img6,
    price: "0.91 ETH",
    time: "1m ago",
  },
];

const History = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[22px] text-[#1B254B] font-bold">History</h3>
        <Button
          type="link"
          className="text-[#6C63FF] text-[16px] rounded-2xl font-semibold bg-[#DFE7F7]"
        >
          See all
        </Button>
      </div>
      <List
        itemLayout="horizontal"
        dataSource={historyData}
        renderItem={(item) => (
          <List.Item className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <Image
                src={item.image}
                alt={item.title}
                className="w-16 h-16 rounded-3xl"
                height={40}
                width={40}
              />
              <div>
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-gray-500">By {item.author}</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-semibold">{item.price}</p>
              <p className="text-gray-500">{item.time}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default History;
