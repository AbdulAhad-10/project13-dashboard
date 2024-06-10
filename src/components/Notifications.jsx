"use client";
import React from "react";
import { Switch } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

const notifications = [
  "Item update notifications",
  "Item comment notifications",
  "Buyer review notifications",
  "Rating reminders notifications",
  "Meetups near you notifications",
  "Company news notifications",
  "New launches and projects",
  "Monthly product changes",
  "Subscribe to newsletter",
  "Email me when someone follows me",
];

const Notifications = () => {
  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#1B254B] mb-4">
          Notifications
        </h1>
        <EllipsisOutlined className="text-[#6C63FF] text-2xl font-extrabold bg-[#F4F7FE] px-2 rounded-lg" />
      </div>

      <div className="flex flex-col gap-5 py-8">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center gap-5">
            <Switch defaultChecked={false} />
            <span className="text-[#1B254B] text-[16px]">{notification}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
