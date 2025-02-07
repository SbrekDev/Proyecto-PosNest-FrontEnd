import Link from "next/link"


export default function Pagination({ page, totalPages }: { page: number, totalPages: number }) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)


    return (
        <nav className="flex justify-center py-10">
            {page > 1 && (
                <Link
                    href={`/admin/products?page=${page - 1}`}
                    className="px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&laquo; </Link>
            )}
            
            {pages.map(currentPage => (
                <Link
                    key={currentPage}
                    href={`/admin/products?page=${currentPage}`}
                    className={`${page === currentPage && 'font-black ring-gray-800 bg-gray-300'} px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0`}
                >{currentPage}</Link>
            ))}


            {page < totalPages && (
                <Link
                    href={`/admin/products?page=${page + 1}`}
                    className="px-4 py-2 text-sm ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                >&raquo; </Link>
            )}
        </nav>
    )
}
