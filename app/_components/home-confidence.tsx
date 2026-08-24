import Link from "next/link";
import { ArrowUpRightIcon, BagIcon, FinanceIcon, ShieldIcon, WrenchIcon } from "./icons";

const ownershipItems = [
  [WrenchIcon, "Official Maintenance", "Ensuring long-lasting performance and reliability."],
  [ShieldIcon, "Warranty Coverage", "Complete peace of mind on every journey."],
  [FinanceIcon, "Financial Services", "Flexible solutions tailored to your ownership goals."],
  [BagIcon, "Genuine Accessories", "Personalize your vehicle to match your distinctive style."],
] as const;

export default function HomeConfidence() {
  return <section id="ownership" className="ownership section-light" aria-labelledby="ownership-title">
    <div className="ownership-lead"><h2 id="ownership-title">Complete Ownership<br />Experience</h2><p>Services and programs engineered to keep your journey seamless.</p><Link className="text-link" href="/contact">Learn more <ArrowUpRightIcon /></Link></div>
    <div className="ownership-items">{ownershipItems.map(([Icon, title, body]) => <article key={title}><Icon /><h3>{title}</h3><p>{body}</p></article>)}</div>
  </section>;
}
