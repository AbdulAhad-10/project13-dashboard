"use client";
import React from "react";
import { Avatar, Card } from "antd";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img3.png";
import {
  AntDesignOutlined,
  SmileOutlined,
  SyncOutlined,
  UserOutlined,
} from "@ant-design/icons";

const nfts = [
  {
    title: "Abstract Colors",
    author: "Esthera Jackson",
    image: img1,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
  {
    title: "ETH AI Brain",
    author: "Nick Wilson",
    image: img2,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
  {
    title: "Mesh Gradients",
    author: "Will Smith",
    image: img3,
    currentBid: "0.91 ETH",
    avatars: [avatar, avatar, avatar],
  },
];

const Trending = () => {
  return (
    <div className="w-[590px]">
      <div className="flex items-center justify-between px-5 pt-10 pb-5">
        <h3 className="text-[22px] text-[#1B254B] font-bold">Trending NFTs</h3>
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

export default Trending;
