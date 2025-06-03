interface TravelDescriptionProps {
  description: string;
}

export default function TravelDescription({
  description,
}: TravelDescriptionProps) {
  return <p className="text-gray-700 leading-relaxed">{description}</p>;
}
