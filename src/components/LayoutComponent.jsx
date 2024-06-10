"use client";
import React, { useState, useEffect } from "react";
import {
  HomeOutlined,
  LockOutlined,
  ShoppingCartOutlined,
  TableOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderIcons from "./HeaderIcons";

const { Header, Content, Footer, Sider } = Layout;
const siderItems = [
  { key: "/", label: "Main Dashboard", icon: <HomeOutlined />, href: "/" },
  {
    key: "/marketplace",
    label: "Marketplace",
    icon: <ShoppingCartOutlined />,
    href: "/marketplace",
  },
  {
    key: "/tables",
    label: "Data Tables",
    icon: <TableOutlined />,
    href: "/tables",
  },
  {
    key: "/profile",
    label: "Profile",
    icon: <UserOutlined />,
    href: "/profile",
  },
  { key: "/signin", label: "Sign In", icon: <LockOutlined />, href: "/signin" },
];

const LayoutComponent = ({ children }) => {
  const siderWidth = 300;
  const headerHeight = 94;
  const [scrollY, setScrollY] = useState(0);
  const pathname = usePathname();
  const [selectedItem, setSelectedItem] = useState("/");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Update selected item based on current pathname
    const currentItem = siderItems.find((item) => item.key === pathname);
    if (currentItem) {
      setSelectedItem(currentItem.label);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const headerOpacity = Math.min(scrollY / 500, 0.7);
  const blurStrength = Math.min(scrollY / 100, 10);
  const headerTop = Math.max(10 - scrollY / 20, 0);

  // Conditionally render sidebar and header based on route
  const isSignInPage = pathname === "/signin";

  return (
    <Layout hasSider={!isSignInPage}>
      {!isSignInPage && (
        <Sider
          width={siderWidth}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            background: "white",
            zIndex: 2,
          }}
          className="py-10"
        >
          <div className="flex flex-col items-center">
            <h1 className="text-[#1B254B] text-2xl">
              <span className="font-bold">HORIZON</span> FREE
            </h1>
            <Divider />
            <Menu
              mode="vertical"
              style={{ width: "100%" }}
              className="px-5"
              selectedKeys={[pathname]}
            >
              {siderItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  icon={item.icon}
                  className="text-[16px] font-semibold"
                  onClick={() => setSelectedItem(item.label)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Menu.Item>
              ))}
            </Menu>
          </div>
        </Sider>
      )}
      <Layout
        style={{
          marginLeft: isSignInPage ? 0 : siderWidth,
          minHeight: "100vh",
        }}
      >
        {!isSignInPage && (
          <Header
            style={{
              position: "fixed",
              top: headerTop,
              right: 0,
              zIndex: 1,
              width: `calc(100% - ${siderWidth}px)`,
              display: "flex",
              alignItems: "center",
              padding: "30px",
              height: headerHeight,
              background: "rgba(246,248,254, 0.2)",
              transition: "all 0.3s ease",
            }}
            className="flex items-center justify-between"
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: `rgba(244 247 254, ${headerOpacity})`,
                backdropFilter: `blur(${blurStrength}px)`,
                WebkitBackdropFilter: `blur(${blurStrength}px)`,
                zIndex: -1,
                borderRadius: scrollY > 100 ? "0 0 20px 20px" : 0,
                boxShadow:
                  scrollY > 50 ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none",
                transition: "all 0.3s ease",
              }}
            />
            <div className="text-[#1B254A]">
              <h6 className="m-0 text-sm" style={{ opacity: 0.7 }}>
                Pages / {selectedItem}
              </h6>
              <h3
                className="m-0 text-3xl font-bold"
                style={{
                  textShadow:
                    scrollY > 100 ? "1px 1px 2px rgba(0, 0, 0, 0.1)" : "none",
                }}
              >
                {selectedItem}
              </h3>
            </div>
            <HeaderIcons />
          </Header>
        )}
        <Content
          className="bg-[rgb(246,248,254)]"
          style={{
            marginTop: isSignInPage ? 0 : headerHeight,
          }}
        >
          <div
            style={{
              padding: isSignInPage ? 0 : 24,
              minHeight: `calc(100vh - ${
                isSignInPage ? 0 : headerHeight + 48 + 70
              }px)`,
            }}
          >
            {children}
          </div>
        </Content>

        <Footer className="text-center bg-white" style={{ padding: "24px" }}>
          © {new Date().getFullYear()} Horizon UI. All Rights Reserved.
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;
