import React from "react";
import { Tag } from "antd";
import "./StatusTag.css";

type Status = "open" | "closed";

interface StatusTagProps {
  status: Status;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const className = `status-tag ${
    status === "open" ? "status-open" : "status-closed"
  }`;

  return (
    <Tag className={className}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Tag>
  );
};

export default StatusTag;
