"use client";

import React from "react";
import { Input, Avatar, Tooltip } from "antd";
import {
  BellOutlined,
  InfoCircleOutlined,
  BulbOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const HeaderIcons = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        padding: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(10px)",
        borderRadius: "24px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Input
        placeholder="Search..."
        prefix={<SearchOutlined />}
        style={{
          width: 200,
          borderRadius: "24px",
          border: "none",
          backgroundColor: "rgb(244 247 254)",
        }}
      />
      <Tooltip title="Notifications">
        <BellOutlined style={{ fontSize: "20px", color: "#888" }} />
      </Tooltip>
      <Tooltip title="Information">
        <InfoCircleOutlined style={{ fontSize: "20px", color: "#888" }} />
      </Tooltip>
      <Tooltip title="Toggle Mode">
        <BulbOutlined style={{ fontSize: "20px", color: "#888" }} />
      </Tooltip>
      <Avatar style={{ backgroundColor: "#1B254B" }}>AP</Avatar>
    </div>
  );
};

export default HeaderIcons;
