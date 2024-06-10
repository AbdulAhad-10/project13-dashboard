import { EllipsisOutlined } from "@ant-design/icons";
import { Table } from "antd";

const data = [
  {
    key: "1",
    name: "Marketplace",
    progress: "75.5%",
    quantity: 2458,
    date: "12.Jan.2021",
  },
  {
    key: "2",
    name: "Venus DB PRO",
    progress: "35.4%",
    quantity: 1485,
    date: "21.Feb.2021",
  },
  {
    key: "3",
    name: "Venus DS",
    progress: "25%",
    quantity: 1024,
    date: "13.Mar.2021",
  },
  {
    key: "4",
    name: "Venus 3D Asset",
    progress: "100%",
    quantity: 858,
    date: "24.Jan.2021",
  },
];

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "PROGRESS",
    dataIndex: "progress",
    key: "progress",
  },
  {
    title: "QUANTITY",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "DATE",
    dataIndex: "date",
    key: "date",
  },
];

const FourColumnTable = () => {
  return (
    <div className="h-full p-6 bg-white rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[22px] font-bold text-[#1B254B]">4-Column Table</h2>
        <EllipsisOutlined className="text-[#6C63FF] text-2xl font-extrabold bg-[#F4F7FE] px-2 rounded-lg" />
      </div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered={false}
        rowClassName="bg-white"
      />
    </div>
  );
};

export default FourColumnTable;
