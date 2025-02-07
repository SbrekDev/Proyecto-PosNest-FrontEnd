'use client'

import { updateProduct } from "@/actions/update-product-action"
import { useParams, useRouter } from "next/navigation"
import { useActionState, useEffect } from "react"
import { toast } from "react-toastify"

export default function EditProductForm({children} : {children : React.ReactNode}) {

    const router = useRouter()
    const {id} = useParams<{id:string}>()

    const updateProductWithId = updateProduct.bind(null, +id)
    const [state, dispatch] = useActionState(updateProductWithId, {
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

        <input type="submit" value='Guardar Cambios' className="rounded bg-green-400 w-full cursor-pointer font-bold py-2"/>
    </form>
  )
}
