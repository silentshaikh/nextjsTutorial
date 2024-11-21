'use client';

import Link from "next/link";

// import React from 'react'
export const prodList = [
    {
        id:1,
        name:"Sam",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem expedita numquam! Vitae eos eum, magnam doloribus non quo voluptates eaque impedit dolor cumque repellat earum id voluptatem? Consequuntur, nam!"
    },
    {
        id:2,
        name:"Tom",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem expedita numquam! Vitae eos eum, magnam doloribus non quo voluptates eaque impedit dolor cumque repellat earum id voluptatem? Consequuntur, nam!"
    },
    {
        id:3,
        name:"Jerry",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem expedita numquam! Vitae eos eum, magnam doloribus non quo voluptates eaque impedit dolor cumque repellat earum id voluptatem? Consequuntur, nam!"
    },
    {
        id:4,
        name:"Ben",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem expedita numquam! Vitae eos eum, magnam doloribus non quo voluptates eaque impedit dolor cumque repellat earum id voluptatem? Consequuntur, nam!"
    },
    {
        id:5,
        name:"Gwen",
        para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem expedita numquam! Vitae eos eum, magnam doloribus non quo voluptates eaque impedit dolor cumque repellat earum id voluptatem? Consequuntur, nam!"
    },
];
function Product() {
  return (
    <section>
        {prodList.map((e) => {
            return (
                <Link href={`/product/${e.id}`}>
                <h2>{e.name}</h2>
                </Link>
            );
        })}
    </section>
  )
}

export default Product
