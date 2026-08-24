import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "Danh sách xe có sẵn giao ngay",
  description: "Khám phá các mẫu xe Porsche có sẵn giao ngay với thông số kỹ thuật và trang bị chi tiết.",
  openGraph: {
    title: "Danh sách xe có sẵn giao ngay | MDOP",
    description: "Khám phá các mẫu xe Porsche có sẵn giao ngay với thông số kỹ thuật và trang bị chi tiết.",
  },
};

export default function Inventory() {
  return (
    <PrototypeHandoff
      title="Available Inventory"
      body="This is an inventory prototype route. Vehicle status and commercial details will only be displayed with verified data."
    />
  );
}
