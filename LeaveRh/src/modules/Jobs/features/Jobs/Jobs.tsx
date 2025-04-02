import React, { useState } from "react";
import { Row, Col } from "antd";
import JobCard from "../../components/JobCard/JobCard";
import Header from "../../components/Header/Header";
import "./Jobs.css";

interface Job {
  id: string;
  title: string;
  department: string;
  description: string;
  deadline: string;
  status: "open" | "closed";
}

// Mock data - replace with actual data from your API
const MOCK_JOBS: Job[] = [
  {
    id: "1",
    title: "UI/UX Designer",
    department: "Design",
    description:
      "We are looking for a talented UI/UX designer to join our team.",
    deadline: "2023-11-30",
    status: "open",
  },
  {
    id: "2",
    title: "Frontend Developer",
    department: "Informatics",
    description:
      "Experienced frontend developer needed for our web applications.",
    deadline: "2023-11-30",
    status: "closed",
  },
  {
    id: "3",
    title: "Business Analyst",
    department: "Business",
    description: "Senior business analyst position for our growing team.",
    deadline: "2023-11-30",
    status: "open",
  },
  {
    id: "4",
    title: "Business Analyst",
    department: "Business",
    description: "Senior business analyst position for our growing team.",
    deadline: "2023-11-30",
    status: "open",
  },
];

const Jobs = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredJobs = MOCK_JOBS.filter((job) => {
    if (activeTab === "all") return true;
    return job.department.toLowerCase() === activeTab;
  });

  const handleEdit = (id: string) => {
    console.log("Edit job:", id);
  };

  const handleDelete = (id: string) => {
    console.log("Delete job:", id);
  };

  const handleView = (id: string) => {
    console.log("View job:", id);
  };

  const handleAddJob = () => {
    console.log("Add new job");
  };

  return (
    <div className="jobs-page">
      <Header
        onAddJob={handleAddJob}
        onTabChange={setActiveTab}
        activeTab={activeTab}
      />

      <Row gutter={[16, 16]}>
        {filteredJobs.map((job) => (
          <Col xs={24} sm={12} lg={8} key={job.id}>
            <JobCard
              {...job}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onView={handleView}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Jobs;
