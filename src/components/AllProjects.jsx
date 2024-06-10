"use client";
import React from "react";
import { Card } from "antd";
import Image from "next/image";
import { EditOutlined } from "@ant-design/icons";
import img8 from "@/public/img8.png";
import img9 from "@/public/img9.png";
import img10 from "@/public/img10.png";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Technology behind the Blockchain",
    image: img8,
  },
  {
    id: 2,
    title: "Greatest way to a good Economy",
    image: img9,
  },
  {
    id: 3,
    title: "Most essential tips for Burnout",
    image: img10,
  },
];

const AllProjects = () => {
  return (
    <div className="h-full p-6 bg-white shadow-sm rounded-xl">
      <h1 className="text-2xl font-bold text-[#1B254B] mb-4">All projects</h1>
      <p className="text-[#A0AEC0] mb-8">
        Here you can find more details about your projects. Keep your user
        engaged by providing meaningful information.
      </p>
      <div className="space-y-4">
        {projects.map((project) => (
          <Card key={project.id} className="p-4 shadow-md rounded-xl" hoverable>
            <div className="flex justify-between">
              <div className="flex items-center gap-5">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#1B254B]">
                    {project.title}
                  </h2>
                  <p className="text-sm text-[#A0AEC0]">
                    Project #{project.id} •{" "}
                    <Link href="#" className="text-[#6C63FF]">
                      See project details
                    </Link>
                  </p>
                </div>
              </div>

              <EditOutlined className="text-[#6C63FF] text-xl" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
