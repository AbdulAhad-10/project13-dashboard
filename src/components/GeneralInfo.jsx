"use client";
import React from "react";
import { Card } from "antd";

const generalInfo = [
  { label: "Education", value: "Stanford University" },
  { label: "Languages", value: "English, Spanish, Italian" },
  { label: "Department", value: "Product Design" },
  { label: "Work History", value: "Google, Facebook" },
  { label: "Organization", value: "Simmmple Web LLC" },
  { label: "Birthday", value: "20 July 1986" },
];

const GeneralInfo = () => {
  return (
    <div className="h-full p-6 bg-white rounded-xl">
      <h1 className="text-2xl font-bold text-[#1B254B] mb-4">
        General Information
      </h1>
      <p className="text-[#A0AEC0] mb-8">
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {generalInfo.map((info, index) => (
          <Card key={index} className="shadow-sm rounded-xl">
            <h2 className="text-sm font-medium text-[#A0AEC0]">{info.label}</h2>
            <p className="text-lg font-semibold text-[#1B254B]">{info.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GeneralInfo;
