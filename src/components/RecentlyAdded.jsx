"use client";
import React from "react";
import { Avatar, Card } from "antd";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import img4 from "@/public/img4.png";
import img5 from "@/public/img5.png";
import img6 from "@/public/img6.png";
import {
  AntDesignOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";

const nfts = [
  {
    title: "Swipe Circles",
    author: "By Peter Will",
    image: img4,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
  {
    title: "Colorful Heaven",
    author: "By Mark Benjamin",
    image: img5,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
  {
    title: "3D Cubes Art",
    author: "By Manny Gates",
    image: img6,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
];

const RecentlyAdded = () => {
  return (
    <div className="w-[590px]">
      <div className="flex items-center justify-between px-5 pt-10 pb-5">
        <h2 className="text-[22px] text-[#1B254B] font-bold">Recently Added</h2>
        <h4 className="text-lg text-[#6C63FF]">Art</h4>
        <h4 className="text-lg text-[#6C63FF]">Music</h4>
        <h4 className="text-lg text-[#6C63FF]">Collectibles</h4>
        <h4 className="text-lg text-[#6C63FF]">Sports</h4>
      </div>
      <div className="flex gap-4 ">
        {nfts.map((nft, index) => (
          <Card
            key={index}
            className="rounded-xl"
            cover={
              <Image
                src={nft.image}
                alt={nft.title}
                className="p-5 rounded-xl"
                height={30}
                width={30}
                unoptimized
              />
            }
          >
            <h3 className="text-lg font-semibold">{nft.title}</h3>
            <p className="text-gray-500">By {nft.author}</p>
            <div className="flex my-4 ">
              <Avatar.Group>
                <Avatar
                  icon={<UserOutlined />}
                  style={{ backgroundColor: "#f56a00" }}
                />
                <Avatar
                  icon={<AntDesignOutlined />}
                  style={{ backgroundColor: "#7265e6" }}
                />
                <Avatar
                  icon={<SmileOutlined />}
                  style={{ backgroundColor: "#ffbf00" }}
                />
              </Avatar.Group>
            </div>
            <p className="font-semibold text-[#6C63FF]">{nft.currentBid}</p>
            <button className="w-full py-2 mt-4 text-white bg-[#11047a] rounded-3xl">
              Place Bid
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
