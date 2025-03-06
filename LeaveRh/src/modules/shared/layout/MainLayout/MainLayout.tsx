import { useLocation } from "react-router-dom";
import { Layout, Menu, Avatar, Typography, Input } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  FileTextOutlined,
  TeamOutlined,
  FileDoneOutlined,
  CameraOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import "./index.css";

const { Header, Sider, Content } = Layout;
const { Text } = Typography;
const { Search } = Input;

interface MainLayoutProps {
  children: React.ReactNode;
  isAdmin: boolean;
}

const Sidebar = ({ isAdmin }: { isAdmin: boolean }) => {
  const links = isAdmin
    ? [
        { name: "Dashboard", path: "/admin/dashboard", icon: <HomeOutlined /> },
        { name: "Users", path: "/admin/users", icon: <TeamOutlined /> },
        {
          name: "Settings",
          path: "/admin/settings",
          icon: <SettingOutlined />,
        },
      ]
    : [
        { name: "Home", path: "/admin/home", icon: <HomeOutlined /> },
        {
          name: "Registrations",
          path: "/admin/registrations",
          icon: <FileTextOutlined />,
        },
        { name: "Leaves", path: "/admin/leaves", icon: <FileDoneOutlined /> },
        { name: "Employee", path: "/admin/employee", icon: <TeamOutlined /> },
        { name: "Jobs", path: "/admin/jobs", icon: <UserOutlined /> },
        {
          name: "Recordings",
          path: "/admin/recordings",
          icon: <CameraOutlined />,
        },
      ];

  return (
    <Sider
      width={250}
      style={{
        background: "#ffffff",
      }}
      className="bg-layout"
    >
      <div className="logo" style={{ padding: 20, textAlign: "center" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{ width: 100, height: "auto" }}
        />
      </div>
      <Menu mode="vertical" className="bg-gray-50 flex-1">
        {links.map((link) => (
          <Menu.Item key={link.path} icon={link.icon}>
            <a href={link.path}>{link.name}</a>
          </Menu.Item>
        ))}
      </Menu>
      <div style={{ marginTop: "auto" }} className="bg-red">
        <Menu>
          <Menu.Item key="settings" icon={<SettingOutlined />}>
            <a href="/settings">Settings</a>
          </Menu.Item>
        </Menu>
        <div style={{ padding: 20, textAlign: "center" }}>
          <Avatar size={50} src="/user-avatar.png" />
          <Text strong style={{ display: "block", marginTop: 10 }}>
            Dali Landolsi
          </Text>
          <Text type="secondary">faroukabichou@gmail.com</Text>
        </div>
      </div>
    </Sider>
  );
};

const PageHeader = () => {
  const location = useLocation();
  const activePage = location.pathname.split("/").pop() || "Home";
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    // You can implement the route search logic here
    console.log("Searching for:", value);
  };

  return (
    <Header className="main-header">
      <div className="page-header-content">
        <h1 className="header-page-title">{activePage}</h1>
        <Search
          placeholder="Search routes..."
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
          className="header-search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSearch={handleSearch}
        />
      </div>
    </Header>
  );
};

const MainLayout = ({ children, isAdmin }: MainLayoutProps) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar isAdmin={isAdmin} />
      <Layout>
        <PageHeader />
        <Content className="main-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
