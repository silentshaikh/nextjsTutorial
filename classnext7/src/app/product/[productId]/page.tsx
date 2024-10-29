import React from 'react'
import { ImgList, imgList, } from '@/components/ProductCard/ProductCard';
import Image from 'next/image';
function ProductDetailPage({params}:{params:{productId:string}}) {
  const productFind:ImgList | undefined = imgList.find((e) => {
    return e.id === Number(params.productId);
  })

  if(productFind){
    return (
      <div>
        <h1>Product Detail</h1>
        <p>{productFind?.id}</p>
        <Image
        src={`/images/${productFind?.img}`}
        alt='product-detail'
        height={300}
        width={300}
        />
      </div>
    )
  }else{
    return(
      <>
      <h1 className='text-2xl'>4O4</h1>
      <h3 className='text-xl'>NOT FOUND</h3>
      </>
    )
  }
};
export default ProductDetailPage;