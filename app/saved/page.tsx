import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "Danh sách xe đã lưu",
  description: "Xem lại danh sách các mẫu xe Porsche bạn đã lưu trên MDOP để so sánh và lựa chọn.",
  openGraph: {
    title: "Danh sách xe đã lưu | MDOP",
    description: "Xem lại danh sách các mẫu xe Porsche bạn đã lưu trên MDOP để so sánh và lựa chọn.",
  },
};

export default function Saved() {
  return (
    <PrototypeHandoff
      title="Saved Vehicles"
      body="Your saved selections are stored locally on your device in this prototype."
    />
  );
}
