import React from "react";
import { Typography, Button, Tabs } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "./Header.css";

const { Title, Text } = Typography;

interface HeaderProps {
  onAddJob?: () => void;
  onTabChange?: (key: string) => void;
  activeTab?: string;
}

const Header: React.FC<HeaderProps> = ({
  onAddJob,
  onTabChange,
  activeTab = "all",
}) => {
  const items = [
    { key: "all", label: "View all" },
    { key: "informatics", label: "Informatics" },
    { key: "business", label: "Business" },
    { key: "design", label: "Design" },
  ];

  return (
    <div className="jobs-header">
      <div className="header-content">
        <div className="header-text">
          <h2 className="header-title">Jobs Title</h2>
          <Text className="header-description">
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          </Text>
        </div>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={onAddJob}
          className="add-job-button"
        >
          Add Job
        </Button>
      </div>
      <Tabs
        items={items}
        className="header-tabs"
        onChange={onTabChange}
        activeKey={activeTab}
        centered={false}
      />
    </div>
  );
};

export default Header;
