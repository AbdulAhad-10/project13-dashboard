// "use client";
// import React from "react";
// import { Card, Typography, Button, Upload } from "antd";
// import { UploadOutlined } from "@ant-design/icons";

// const { Title, Text } = Typography;

// const UploadCard = () => {
//   return (
//     <Card className="rounded-xl">
//       <div className="mb-4 text-center">
//         <Upload>
//           <UploadOutlined className="mb-2 text-4xl" />
//           Upload Files
//         </Upload>
//         <Text type="secondary">PNG, JPG and GIF files are allowed</Text>
//       </div>
//       <div className="mt-4 text-center">
//         <Title level={5}>Complete your profile</Title>
//         <Text type="secondary">
//           Stay on the pulse of distributed projects with an online whiteboard to
//           plan, coordinate and discuss.
//         </Text>
//         <Button type="primary" className="mt-4">
//           Publish now
//         </Button>
//       </div>
//     </Card>
//   );
// };

// export default UploadCard;

"use client";
import React from "react";
import { Card, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const UploadCard = () => {
  return (
    <Card className="h-full rounded-xl">
      <div className="mb-8 text-center bg-[#F4F7FE] p-8 rounded-xl">
        <div className="flex items-center justify-center mb-4 rounded-full">
          <UploadOutlined className="text-5xl text-[#6C63FF]" />
        </div>
        <h2 className="text-xl mb-1 font-bold text-[#6C63FF]">Upload Files</h2>
        <p className="text-sm text-[#A0AEC0]">
          PNG, JPG and GIF files are allowed
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-[#1B254B]">
          Complete your profile
        </h1>
        <p className="text-[#A0AEC0] text-lg leading-tight">
          Stay on the pulse of distributed projects with an online whiteboard to
          plan, coordinate and discuss.
        </p>
        <Button type="primary" className="mt-4 bg-[#6C63FF] border-0">
          Publish now
        </Button>
      </div>
    </Card>
  );
};

export default UploadCard;
