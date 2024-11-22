'use client';
import { ChangeEvent, FormEvent, useState } from "react";

export default function Home() {
  const [color,setColor] = useState<boolean>(false);
  const [value,setValue] = useState<string>('');
  //Contional Rendering
  const onHandleColor = () => {
    if(color){
      setColor(false);
    }else{
      setColor(true);
    }
  }

  //Handling Input
  const onHandleInput = (e:ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(e.target.value);
    console.log(value);
  }
  return (
   <>
   {/* conditional& renderng */}
   <h2 className="text-3xl font-mono pt-5">Contional Rendering</h2>
   <div onClick={onHandleColor} className={`w-96 ${color ? "" : "bg-slate-500"}   p-3`}>
    <p>{color ?'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque eligendi cumque autem enim porro quae aspernatur facere laboriosam. Optio minus accusamus doloribus vel qui maiores itaque ad incidunt velit voluptas totam deleniti nostrum numquam perspiciatis harum molestias eum, iusto temporibus at aspernatur placeat modi. Quaerat.' :'helo'}</p>
   </div>

   <h2 className="text-3xl font-mono pt-10 pb-3">Handling Input</h2>
    <input className="shadow-lg w-72 p-2 outline-none" value={value} onChange={(e) => onHandleInput(e)} type="text" name="" id="" />
   </>
  );
}
