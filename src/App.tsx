import { Select, Alert } from "antd";

export default function App() {
  return (
    <div>
      <Alert
        style={{ width: 200 }}
        type="warning"
        showIcon
        message="can not select and copy"
      />

      <Select
        disabled
        defaultValue="lucy"
        style={{ width: 120 }}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
    </div>
  );
}
