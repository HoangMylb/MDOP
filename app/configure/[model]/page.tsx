import { PrototypeHandoff } from "../../_components/prototype-handoff";
export default async function ConfigureModel({ params }: { params: Promise<{ model: string }> }) { const { model } = await params; return <PrototypeHandoff title={`Configure ${model.toUpperCase()}`} body="Model context is preserved. The full configurator will be connected in the next stage of development." />; }
