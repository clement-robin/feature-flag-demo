export default function CartItemDescription({
  name,
  size,
  color,
  image,
}: {
  name: string;
  size: string;
  color: string;
  image: string;
}) {
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <img src={image} alt={name} className="w-16 h-16 " />
        <div className="w-full">
          <h2 className="font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">
            Taille: {size} | Couleur: {color}
          </p>
        </div>
      </div>
    </div>
  );
}
