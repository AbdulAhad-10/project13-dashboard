"use client";
import React from "react";
import { Card, Row, Col, Typography } from "antd";
import {
  BarChartOutlined,
  DollarOutlined,
  ShoppingCartOutlined,
  FlagOutlined,
  CheckCircleOutlined,
  FileOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const stats = [
  {
    icon: <BarChartOutlined className="text-2xl text-[#6C63FF]" />,
    title: "Earnings",
    value: "$350.4",
  },
  {
    icon: <DollarOutlined className="text-2xl text-[#6C63FF]" />,
    title: "Spend this month",
    value: "$642.39",
  },
  {
    icon: <ShoppingCartOutlined className="text-2xl text-[#6C63FF]" />,
    title: "Sales",
    value: "$574.34",
    extra: "+23% since last month",
  },
  {
    icon: <FlagOutlined className="text-2xl text-[#6C63FF]" />,
    title: "Your balance",
    value: "$1,000",
  },
  {
    icon: <CheckCircleOutlined className="text-2xl text-[#6C63FF]" />,
    title: "New Tasks",
    value: "154",
  },
  {
    icon: <FileOutlined className="text-2xl text-[#6C63FF]" />,
    title: "Total Projects",
    value: "2935",
  },
];

const StatsComponent = () => {
  return (
    <Row gutter={[24, 24]} className="my-6">
      {stats.map((stat, index) => (
        <Col xs={24} sm={12} md={8} lg={8} xl={8} key={index}>
          <Card className="flex flex-col justify-center h-full rounded-xl">
            <div className="flex items-center">
              <div className="bg-[#6C63FF] bg-opacity-10 rounded-[50%] w-[50px] h-[50px] flex justify-center mr-4">
                {stat.icon}
              </div>
              <div>
                <Text className="font-semibold text-[#888888]">
                  {stat.title}
                </Text>
                <Title
                  level={4}
                  className="text-[#1B254B]"
                  style={{ margin: 0 }}
                >
                  {stat.value}
                </Title>
                {stat.extra && (
                  <div className="text-[#888888] mt-1">{stat.extra}</div>
                )}
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsComponent;

// "use client";

// import React from "react";
// import { Card, Row, Col, Typography } from "antd";
// import {
//   BarChartOutlined,
//   DollarOutlined,
//   ShoppingCartOutlined,
//   FlagOutlined,
//   CheckCircleOutlined,
//   FileOutlined,
// } from "@ant-design/icons";

// const { Title, Text } = Typography;

// const stats = [
//   {
//     icon: <BarChartOutlined className="text-2xl text-indigo-600" />,
//     title: "Earnings",
//     value: "$350.4",
//   },
//   {
//     icon: <DollarOutlined className="text-2xl text-indigo-600" />,
//     title: "Spend this month",
//     value: "$642.39",
//   },
//   {
//     icon: <ShoppingCartOutlined className="text-2xl text-indigo-600" />,
//     title: "Sales",
//     value: "$574.34",
//     extra: "+23% since last month",
//   },
//   {
//     icon: <FlagOutlined className="text-2xl text-indigo-600" />,
//     title: "Your balance",
//     value: "$1,000",
//   },
//   {
//     icon: <CheckCircleOutlined className="text-2xl text-indigo-600" />,
//     title: "New Tasks",
//     value: "154",
//   },
//   {
//     icon: <FileOutlined className="text-2xl text-indigo-600" />,
//     title: "Total Projects",
//     value: "2935",
//   },
// ];

// const StatsComponent = () => {
//   return (
//     <Row gutter={[24, 24]} className="my-6">
//       {stats.map((stat, index) => (
//         <Col xs={24} sm={12} md={8} lg={8} xl={8} key={index}>
//           <Card className="flex flex-col justify-center h-full rounded-lg">
//             <div className="flex items-center">
//               <div className="flex items-center justify-center w-12 h-12 mr-4 bg-indigo-100 rounded-full">
//                 {stat.icon}
//               </div>
//               <div>
//                 <Text className="font-semibold text-gray-500">
//                   {stat.title}
//                 </Text>
//                 <Title level={4} className="m-0 text-gray-900">
//                   {stat.value}
//                 </Title>
//                 {stat.extra && (
//                   <div className="mt-1 text-gray-500">{stat.extra}</div>
//                 )}
//               </div>
//             </div>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// };

// export default StatsComponent;
