"use client";

import React from "react";
import { Calendar, theme } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const CustomCalendar = () => {
  const { token } = theme.useToken();
  const wrapperStyle = {
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    height: "100%",
  };

  return (
    <div style={wrapperStyle} className="px-4 py-6 bg-white rounded-xl ">
      <Calendar
        fullscreen={false}
        onPanelChange={onPanelChange}
        headerRender={({ value, onChange }) => {
          return (
            <div className="flex items-center justify-between px-2 mb-4">
              <LeftOutlined
                onClick={() => {
                  const newValue = value.clone().subtract(1, "month");
                  onChange(newValue);
                }}
                className="p-2 text-white bg-indigo-600 rounded-lg cursor-pointer"
              />
              <span className="text-lg font-bold text-[#1B254B]">
                {value.format("MMMM YYYY")}
              </span>
              <RightOutlined
                onClick={() => {
                  const newValue = value.clone().add(1, "month");
                  onChange(newValue);
                }}
                className="p-2 text-white bg-indigo-600 rounded-lg cursor-pointer"
              />
            </div>
          );
        }}
        className="h-full custom-calendar"
      />
    </div>
  );
};

export default CustomCalendar;
