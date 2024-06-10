"use client";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

const Banner = () => {
  return (
    <div className="min-w-[590px] flex flex-col p-14 text-white bg-gradient-to-r from-[#2D0DE0] to-[#4513ED] rounded-3xl">
      <Title level={1} className="mb-2 font-bold !text-white">
        Discover, collect,
        <br />
        and sell
        <br />
        extraordinary NFTs
      </Title>
      <Text className="mb-6 !text-white">
        Enter in this creative world.
        <br />
        Discover now the latest NFTs or
        <br />
        start creating your own!
      </Text>
      <div className="flex gap-4">
        <Button
          type="primary"
          className="px-6 py-4 font-semibold text-black bg-white rounded-full"
        >
          Discover now
        </Button>
        <Button type="link" className="font-semibold text-white">
          Watch video
        </Button>
      </div>
    </div>
  );
};

export default Banner;
