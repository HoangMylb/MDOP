import type { Metadata } from "next";
import { PrototypeHandoff } from "../../_components/prototype-handoff";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ model: string }>;
}): Promise<Metadata> {
  const { model } = await params;
  const name = model.toUpperCase();
  const imageMap: Record<string, string> = {
    "911": "/images/v2/family-911.png",
    "taycan": "/images/v2/family-taycan.png",
    "macan": "/images/v2/family-macan.png",
    "cayenne": "/images/v2/family-cayenne.png",
    "panamera": "/images/v2/family-panamera.png",
    "718": "/images/v2/family-718.png",
  };

  const imageUrl = imageMap[model.toLowerCase()] || "/images/v2/hero.png";

  return {
    title: `Porsche ${name}`,
    description: `Khám phá chi tiết thông số kỹ thuật, động cơ và thiết kế của Porsche ${name}.`,
    openGraph: {
      title: `Porsche ${name} | MDOP`,
      description: `Khám phá chi tiết thông số kỹ thuật, động cơ và thiết kế của Porsche ${name}.`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: `Porsche ${name}`,
        },
      ],
    },
  };
}

export default async function Model({
  params,
}: {
  params: Promise<{ model: string }>;
}) {
  const { model } = await params;
  return (
    <PrototypeHandoff
      title={`${model.toUpperCase()} Details`}
      body="Model context is preserved from the homepage. The next step is exploring detailed specifications or configuring this model."
    />
  );
}
