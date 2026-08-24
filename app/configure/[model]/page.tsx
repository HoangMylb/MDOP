import type { Metadata } from "next";
import { PrototypeHandoff } from "../../_components/prototype-handoff";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model } = await params;
  const name = model.toUpperCase();
  return {
    title: `Cấu hình Porsche ${name}`,
    description: `Tùy biến màu sắc, mâm xe, nội thất và các tùy chọn hiệu năng cho Porsche ${name}.`,
    openGraph: {
      title: `Cấu hình Porsche ${name} | MDOP`,
      description: `Tùy biến màu sắc, mâm xe, nội thất và các tùy chọn hiệu năng cho Porsche ${name}.`,
    },
  };
}

export default async function ConfigureModel({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model } = await params;
  return (
    <PrototypeHandoff
      title={`Configure ${model.toUpperCase()}`}
      body="Model context is preserved. The full configurator will be connected in the next stage of development."
    />
  );
}
