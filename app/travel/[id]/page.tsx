import { travels } from "@/data/travels";
import { notFound } from "next/navigation";
import TravelPresentation from "@/app/components/Travel/TravelPresentation";

interface TravelDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return travels.map((travel) => ({
    id: travel.id,
  }));
}

export default async function TravelDetailPage({
  params,
}: TravelDetailPageProps) {
  const { id } = await params;
  const travel = travels.find((t) => t.id === id);

  if (!travel) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <TravelPresentation travel={travel} />
    </div>
  );
}
