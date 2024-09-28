import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <h1>Hello World</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusamus aspernatur beatae quo ipsum libero laborum necessitatibus, iure vero optio natus earum adipisci non voluptatem molestiae a nobis eius aut. Voluptatum ex adipisci, nesciunt vitae laborum dolor eius, quia rem magnam cum sunt necessitatibus. Sunt?</p>
    <Link href="/about"><button>Go to About</button></Link>
   </>
  );
}
