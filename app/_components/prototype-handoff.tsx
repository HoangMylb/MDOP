import Link from "next/link";

export function PrototypeHandoff({ title, body, back = "/" }: { title: string; body: string; back?: string }) {
  return <main className="handoff"><p>MDOP · Prototype</p><h1>{title}</h1><p>{body}</p><Link href={back}>Back to homepage</Link></main>;
}
