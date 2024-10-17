import Link from "next/link"

export default function Product(){
    return (
        <>
        <h1 className="text-5xl">Product</h1>
        <Link href='/product/productitem'>
       <button>Go To Product Item</button>
        </Link>
        </>
    );
};