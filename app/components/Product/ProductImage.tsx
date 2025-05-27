export default function ProductImage({ image }: { image: string }) {
    console.log(image);
    return (
        <div>
            <img src={image} alt="test" width={300} height={500} className="max-w-full h-auto  rounded-md" />
        </div>
    )
}