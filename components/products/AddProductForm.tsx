'use client'

import { addProduct } from "@/actions/add-product-action"
import { useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function AddProductForm({children} : {children : React.ReactNode}) {

    const router = useRouter()

    const [state, dispatch] = useActionState(addProduct, {
        errors: [],
        success: ''
    })

    useEffect(()=>{
        if(state.errors){
            state.errors.forEach(e => toast.error(e))
        }
        if(state.success){
            router.push('/admin/products')
            toast.success(state.success)
        }
    },[state])

  return (
    <form className="space-y-5" action={dispatch}>
      
        {children}

        <input type="submit" value='Agregar Producto' className="rounded bg-green-400 w-full cursor-pointer font-bold py-2"/>
    </form>
  )
}
