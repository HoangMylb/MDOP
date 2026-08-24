import HomeClient from "./_components/home-client";
import HomeConfidence from "./_components/home-confidence";

export default function HomePage() {
  return <HomeClient confidence={<HomeConfidence />} />;
}
