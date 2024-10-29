import Image from "next/image";
import Link from "next/link";

export interface ImgList{
    img:string;
    id:number;
}
export const imgList:ImgList[] = [
    {
        id:1,
        img:"2f88a893bb3395ac83287d3c508485a6ed88e19d.avif"
    },
    {
        id:2,
        img:"2fe775dffb08e3347381bee7507e8b9d0968a6f2.avif"
    },
    {
        id:3,
        img:"3a239549c7bdec6f3fe4fc646566a3a184226f5f.avif"
    },
    {
        id:4,
        img:"03b37a5c1bbe3876a9c5447094cb6b7b18fd22eb.avif"
    },
];
function ProductCard() {
  return (
    <section className=" py-5 flex justify-evenly">
      {
        imgList.map((e) => {
            return (
                <Link href={`/product/${e.id}`}>
                <Image
                key={e.id}
                src={`/images/${e.img}`}
                alt="product-image"
                width={200} //100px
                height={200} //100px
                />
                </Link>
            )
        })
      }
    </section>
  )
}

export default ProductCard
