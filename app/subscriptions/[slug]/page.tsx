import { subscriptions } from "@/data/subscriptions";
import { notFound } from "next/navigation";
import SubscriptionDetail from "../../components/Subscriptions/SubscriptionDetail";

interface SubscriptionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function SubscriptionPage({ params }: SubscriptionPageProps) {
  const { slug } = await params;
  const subscription = subscriptions.find(sub => sub.slug === slug);

  if (!subscription) {
    notFound();
  }

  return <SubscriptionDetail subscription={subscription} />;
}

export function generateStaticParams() {
  return subscriptions.map((subscription) => ({
    slug: subscription.slug,
  }));
}
