import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "Khám phá các dòng xe Porsche",
  description: "Khám phá 6 dòng xe huyền thoại của Porsche: 911, Taycan, Panamera, Macan, Cayenne và 718. Tìm hiểu hiệu năng đỉnh cao và thiết kế thể thao độc bản.",
  openGraph: {
    title: "Khám phá các dòng xe Porsche | MDOP",
    description: "Khám phá 6 dòng xe huyền thoại của Porsche: 911, Taycan, Panamera, Macan, Cayenne và 718.",
  },
};

export default function Models() {
  return (
    <PrototypeHandoff
      title="Explore Model Lines"
      body="You are at the model discovery entry point. Models selected from the homepage continue here."
    />
  );
}
