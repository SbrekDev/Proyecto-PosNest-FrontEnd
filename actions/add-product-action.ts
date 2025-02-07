"use server"

import { ErrorResponseSchema, ProductFormSchema } from "@/src/schemas"
import { revalidateTag } from "next/cache"

type ActionStateType = {
    errors: string[],
    success: string
}

export async function addProduct(prevState: ActionStateType, formdata: FormData){

    const product = ProductFormSchema.safeParse({
        name: formdata.get('name'),
        price: formdata.get('price'),
        image: formdata.get('image'),
        inventory: formdata.get('inventory'),
        categoryId: formdata.get('categoryId'),
    })

    if(!product.success){
        return {
            errors: product.error.issues.map(issue => issue.message),
            success: ''
        }
    }
    const url = `${process.env.API_URL}/products`
    const req = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product.data)
    })

    const json = await req.json()

    if(!req.ok){
        const errors = ErrorResponseSchema.parse(json)
        return {
            errors : errors.message.map(issue => issue),
            success: ''
        }
        
    }


    return {
        errors: [],
        success: 'Producto agregado correctamente'
    }
}