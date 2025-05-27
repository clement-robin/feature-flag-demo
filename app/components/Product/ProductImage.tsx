import Image from "next/image";

interface ProductImageProps {
  image: string;
  name: string;
}

export default function ProductImage({ image, name }: ProductImageProps) {
  return (
    <div className="relative w-full">
      <Image
        src={image}
        alt={name || "Product image"}
        width={800}
        height={800}
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "600px",
          objectFit: "contain",
        }}
        className="rounded-lg"
        priority
      />
    </div>
  );
}
