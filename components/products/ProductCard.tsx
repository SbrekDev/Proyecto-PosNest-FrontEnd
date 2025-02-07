import { Product } from "@/src/schemas";
import { formatCurrency, getImagePath, isAvailable } from "@/src/utils";
import Image from "next/image";
import AddProductoBtn from "./AddProductoBtn";

export default function ProductCard({product}: {product: Product}) {
    return (
        <div
            className='rounded bg-white shadow relative p-5'
        >
            <div className={`${!isAvailable(product.inventory) && 'opacity-40'}`}>
                <Image
                    src={getImagePath(product.image)}
                    alt={`Imagen del producto ${product.name}`}
                    width={400}
                    height={600}
                    priority
                />
                <div className="p-3 space-y-2">
                    <h3 className="text-xl font-bold text-gray-600">{product.name}</h3>
                    <p className="text-gray-500">Disponibles: {product.inventory}</p>
                    <p className="text-2xl font-extrabold  text-gray-900">{formatCurrency(product.price)}</p>
                </div>
            </div>
            {
                isAvailable(product.inventory) ? (
                    <AddProductoBtn product={product}/>
                ) : (
                    <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white opacity-60 w-full text-center py-5 uppercase font-black text-2xl">Agotado</p>
                )
            }
        </div>
    )
}