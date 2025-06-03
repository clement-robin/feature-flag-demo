import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

export default function ProductImage({ image, name }: ProductImageProps) {
  const imageUrl = image.startsWith("http")
    ? image
    : `https://clement-robin.github.io/feature-flag-demo${image}`;

  return (
    <div className="relative w-full">
      <img
        src={imageUrl}
        alt={name || "Product image"}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "600px",
          objectFit: "contain",
        }}
        className="rounded-lg"
      />
    </div>
  );
}
