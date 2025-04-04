import { Button } from "antd";
import { IButton } from "../../types/types";
import "./ButtonPrimary.css";
export default function ButtonPrimary({
  text,
  isLoading = false,
  htmlType = "submit",
}: IButton) {
  return (
    <Button type="primary" loading={isLoading} htmlType={htmlType}>
      {text}
    </Button>
  );
}
