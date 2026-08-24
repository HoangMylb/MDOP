import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "Cấu hình xe Porsche",
  description: "Bắt đầu cá nhân hóa và cấu hình chiếc xe Porsche mơ ước theo sở thích và phong cách của riêng bạn.",
  openGraph: {
    title: "Cấu hình xe Porsche | MDOP",
    description: "Bắt đầu cá nhân hóa và cấu hình chiếc xe Porsche mơ ước theo sở thích và phong cách của riêng bạn.",
  },
};

export default function Configure() {
  return (
    <PrototypeHandoff
      title="Select Porsche to Configure"
      body="Please select a model line before configuring. Context from the homepage is preserved in the URL."
    />
  );
}
