import React from "react";
import { Card, Button, Space, Typography } from "antd";
import { LinkOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import StatusTag from "../StatusTag/StatusTag";
import "./JobCard.css";

const { Text, Link } = Typography;

export interface JobCardProps {
  id: string;
  title: string;
  description: string;
  deadline: string;
  status?: "open" | "closed";
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
}

const JobCard = ({
  id,
  title,
  description,
  deadline,
  status = "open",
  onEdit,
  onDelete,
  onView,
}: JobCardProps) => {
  return (
    <Card className="job-card-custom">
      <div className="job-card-header">
        <Space className="action-icons">
          <Button
            type="text"
            icon={<LinkOutlined />}
            onClick={() => onView?.(id)}
          />
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => onEdit?.(id)}
          />
          <Button
            type="text"
            icon={<DeleteOutlined />}
            onClick={() => onDelete?.(id)}
          />
        </Space>
        <div className="title-row">
          <div className="job-icon" />
          <Text className="job-title">{title}</Text>
        </div>
      </div>

      <div className="job-content">
        <div className="description-section">
          <Text className="description-label">Description:</Text>
          <Text className="description-text">{description}</Text>
        </div>

        <div className="deadline-section">
          <div className="deadline-row">
            <Text className="deadline-label">Deadline:</Text>
            <Text className="deadline-text">{deadline}</Text>
          </div>
          <StatusTag status={status} />
        </div>
      </div>

      <div className="see-more-container">
        <Link className="see-more-link" onClick={() => onView?.(id)}>
          See More
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
