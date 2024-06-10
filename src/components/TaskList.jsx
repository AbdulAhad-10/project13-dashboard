import { Checkbox } from "antd";
import { DragOutlined, HolderOutlined } from "@ant-design/icons";

const tasks = [
  "Landing Page Design",
  "Dashboard Builder",
  "Mobile App Design",
  "Illustrations",
  "Promotional LP",
  "Landing Page Design",
  "Dashboard Builder",
  "Mobile App Design",
  "Illustrations",
];

export default function TaskList() {
  return (
    <div className="h-full p-4 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Tasks</h2>
        <HolderOutlined />
      </div>
      <div className="space-y-2">
        {tasks.map((task) => (
          <div
            key={task}
            className="flex items-center justify-between space-x-2 text-lg"
          >
            <div className="flex gap-3">
              <Checkbox defaultChecked />
              <span className="font-semibold text-[#1B254B]">{task}</span>
            </div>
            <HolderOutlined className="ml-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}
