import React, { useState } from "react";
import { Typography, Button, Input, Upload } from "antd";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UploadOutlined } from "@ant-design/icons";
import "./CreateJob.css";

const { Title, Text } = Typography;
const { TextArea } = Input;

interface CreateJobForm {
  jobName: string;
  description: string;
  jobPicture?: File;
  openSeats: number;
}

const schema = yup
  .object({
    jobName: yup.string().required("Job name is required"),
    description: yup
      .string()
      .required("Description is required")
      .max(275, "Description cannot exceed 275 characters"),
    jobPicture: yup.mixed(),
    openSeats: yup
      .number()
      .required("Number of open seats is required")
      .min(1, "Must have at least 1 open seat"),
  })
  .required();

const CreateJob = () => {
  const [imageUrl, setImageUrl] = useState<string>();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<CreateJobForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      jobName: "",
      description: "",
      openSeats: 1,
    },
  });

  const description = watch("description");
  const charactersLeft = 275 - (description?.length || 0);

  const onSubmit = (data: CreateJobForm) => {
    console.log(data);
  };

  const handleImageChange = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="create-job-form">
      <div className="header-text">
        <h2 className="header-title">Jobs Title</h2>
        <Text className="header-description">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </Text>
      </div>

      <div className="form-content">
        <div className="form-field">
          <div className="form-field-left">
            <label>Job Name</label>
          </div>
          <div className="form-field-right">
            <Controller
              name="jobName"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Ui/Ux design"
                  className="form-input"
                  status={errors.jobName ? "error" : ""}
                />
              )}
            />
            {errors.jobName && (
              <Text type="danger" className="error-message">
                {errors.jobName.message}
              </Text>
            )}
          </div>
        </div>

        <div className="form-field">
          <div className="form-field-left">
            <label>Description</label>
            <Text type="secondary" className="field-description">
              Write a short introduction.
            </Text>
          </div>
          <div className="form-field-right">
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextArea
                  {...field}
                  placeholder="Lorem ipsum..."
                  className="form-textarea"
                  status={errors.description ? "error" : ""}
                  maxLength={275}
                  rows={4}
                />
              )}
            />
            <Text type="secondary" className="character-count">
              {charactersLeft} characters left
            </Text>
            {errors.description && (
              <Text type="danger" className="error-message">
                {errors.description.message}
              </Text>
            )}
          </div>
        </div>

        <div className="form-field">
          <div className="form-field-left">
            <label>Choose Job picture</label>
            <Text type="secondary" className="field-description">
              This will be displayed on Job profile.
            </Text>
          </div>
          <div className="form-field-right">
            <div className="upload-container">
              <div className="preview-circle">
                {imageUrl && <img src={imageUrl} alt="Job preview" />}
              </div>
              <div className="upload-wrapper">
                <Controller
                  name="jobPicture"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <Upload.Dragger
                      accept="image/png,image/jpeg,image/gif,image/svg+xml"
                      beforeUpload={(file) => {
                        onChange(file);
                        handleImageChange(file);
                        return false;
                      }}
                      maxCount={1}
                      className="upload-area"
                    >
                      <div className="upload-content">
                        <UploadOutlined className="upload-icon" />
                        <Text className="upload-text">Click to upload</Text>
                        <Text type="secondary">or drag and drop</Text>
                        <Text type="secondary" className="upload-hint">
                          SVG, PNG, JPG or GIF (max. 800×400px)
                        </Text>
                      </div>
                    </Upload.Dragger>
                  )}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="form-field">
          <div className="form-field-left">
            <label>Number of Open Seats</label>
          </div>
          <div className="form-field-right">
            <Controller
              name="openSeats"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  type="number"
                  min={1}
                  className="form-input"
                  status={errors.openSeats ? "error" : ""}
                />
              )}
            />
            {errors.openSeats && (
              <Text type="danger" className="error-message">
                {errors.openSeats.message}
              </Text>
            )}
          </div>
        </div>
      </div>

      <div className="form-actions">
        <Button className="cancel-button">Cancel</Button>
        <Button type="primary" htmlType="submit" className="submit-button">
          Save
        </Button>
      </div>
    </form>
  );
};

export default CreateJob;
