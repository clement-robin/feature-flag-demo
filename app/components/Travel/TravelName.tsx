interface TravelNameProps {
  name: string;
}

export default function TravelName({ name }: TravelNameProps) {
  return <h1 className="text-3xl font-bold text-gray-900 mb-2">{name}</h1>;
}
