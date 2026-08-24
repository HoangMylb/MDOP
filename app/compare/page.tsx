import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "So sánh các dòng xe Porsche",
  description: "So sánh trực quan thông số, kích thước, hiệu suất và trang bị giữa các dòng xe Porsche.",
  openGraph: {
    title: "So sánh các dòng xe Porsche | MDOP",
    description: "So sánh trực quan thông số, kích thước, hiệu suất và trang bị giữa các dòng xe Porsche.",
  },
};

export default function Compare() {
  return (
    <PrototypeHandoff
      title="Compare Models"
      body="Selected vehicle models are passed via URL and stored locally so you can continue your evaluation."
    />
  );
}
