"use client";
import React from "react";
import { Card } from "antd";
import avatar from "../public/avatar.png";
import img7 from "../public/img7.png";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <Card className="h-full rounded-xl">
      <div className="flex flex-col items-center">
        <Image
          src={img7}
          height={100}
          width={200}
          alt="cover"
          unoptimized
          className="w-full h-32 rounded-xl"
        />
        <Image
          width={80}
          height={80}
          alt="avatar"
          src={avatar}
          unoptimized
          className="relative -translate-y-1/2 border-4 border-white border-solid rounded-full "
        />
      </div>
      <div className="-mt-8 text-center">
        <h1 className="text-xl font-bold text-[#1B254B]">Adela Parkson</h1>
        <p className="text-sm text-[#A0AEC0]">Product Designer</p>
        <div className="flex justify-around mt-4">
          <div>
            <h1 className="text-2xl font-bold text-[#1B254B]">17</h1>
            <p className="text-sm text-[#A0AEC0]">Posts</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1B254B]">9.7k</h1>
            <p className="text-sm text-[#A0AEC0]">Followers</p>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#1B254B]">274</h1>
            <p className="text-sm text-[#A0AEC0]">Following</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
