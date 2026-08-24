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

export const metadata: Metadata = {
  title: "MDOP — Make Dreams. Own Porsche.",
  description: "Discover the Porsche designed for your lifestyle.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
