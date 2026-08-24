import { PrototypeHandoff } from "../../_components/prototype-handoff";
export default async function Model({ params }: { params: Promise<{ model: string }> }) { const { model } = await params; return <PrototypeHandoff title={`${model.toUpperCase()} Details`} body="Model context is preserved from the homepage. The next step is exploring detailed specifications or configuring this model." />; }
