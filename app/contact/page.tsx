import type { Metadata } from "next";
import { PrototypeHandoff } from "../_components/prototype-handoff";

export const metadata: Metadata = {
  title: "Tư vấn & Liên hệ Porsche",
  description: "Kết nối trực tiếp với chuyên viên tư vấn Porsche MDOP để nhận thông tin ưu đãi và trải nghiệm lái thử.",
  openGraph: {
    title: "Tư vấn & Liên hệ Porsche | MDOP",
    description: "Kết nối trực tiếp với chuyên viên tư vấn Porsche MDOP để nhận thông tin ưu đãi và trải nghiệm lái thử.",
  },
};

export default function Contact() {
  return (
    <PrototypeHandoff
      title="Speak with a Porsche Consultant"
      body="This prototype handoff retains your selected model in the URL, ready to connect with a direct consultation advisor."
    />
  );
}
