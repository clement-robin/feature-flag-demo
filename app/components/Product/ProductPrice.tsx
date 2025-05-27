export default function ProductPriceSelector({ price }: { price: number }) {
    return (
        <div className="mt-6">
            <h3 className="text-2xl font-bold">{price} €</h3>
        </div>
    )
}
