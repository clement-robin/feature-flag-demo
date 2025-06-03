import { events } from "@/data/events";
import EventDetailClientComponent from "@/app/components/Events/EventDetailClientComponent";


export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default function EventDetailPage() {
  return <EventDetailClientComponent />;
}
