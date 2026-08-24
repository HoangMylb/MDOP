import type { Metadata, Viewport } from "next";
import "@fontsource-variable/exo-2";
import "./globals.css";
import "./hero-option-one.css";
import "./option-three-assets.css";
import "./harden.css";
import "./typeset.css";
import "./layout-pass.css";
import "./motion.css";
import "./adapt.css";
import "./harden-a11y.css";
import "./colorize.css";
import "./optimize.css";
import "./polish.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mdop.vn";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MDOP — Make Dreams. Own Porsche.",
    template: "%s | MDOP",
  },
  description: "Khám phá và sở hữu dòng xe Porsche định hình phong cách sống: 911, Taycan, Panamera, Macan, Cayenne, 718. So sánh thông số và bắt đầu cấu hình xe mơ ước.",
  applicationName: "MDOP",
  keywords: [
    "MDOP",
    "Porsche",
    "Make Dreams Own Porsche",
    "Porsche 911",
    "Porsche Taycan",
    "Porsche Panamera",
    "Porsche Macan",
    "Porsche Cayenne",
    "Porsche 718",
    "Porsche Vietnam",
    "Mua xe Porsche",
    "Bảng giá Porsche",
    "Cấu hình Porsche"
  ],
  authors: [{ name: "MDOP" }],
  creator: "MDOP",
  publisher: "MDOP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: "MDOP — Make Dreams. Own Porsche.",
    title: "MDOP — Make Dreams. Own Porsche.",
    description: "Khám phá và sở hữu dòng xe Porsche định hình phong cách sống: 911, Taycan, Panamera, Macan, Cayenne, 718. So sánh thông số và bắt đầu cấu hình.",
    images: [
      {
        url: "/images/v2/hero.png",
        width: 1920,
        height: 1080,
        alt: "MDOP — Make Dreams. Own Porsche. Pure Performance. Pure Emotion.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDOP — Make Dreams. Own Porsche.",
    description: "Khám phá và sở hữu dòng xe Porsche định hình phong cách sống của bạn: 911, Taycan, Panamera, Macan, Cayenne, 718.",
    images: ["/images/v2/hero.png"],
    creator: "@mdop",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0c",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
