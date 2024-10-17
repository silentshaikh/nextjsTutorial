import Link from "next/link"

export default function ProductItem(){
    return(
        <>
        <h1 className="text-5xl">Product Items</h1>
        <Link href='/product'>
        <button>Go To Product</button>
        </Link>
        </>
    )
}