'use client';
import {useState} from 'react';

export default function Home() {
  const [value,setValue] =   useState<string>('hello World')
  let helo = '';
   const handleClick=() => {
    helo = 'hello usestate';
    // alert(helo);
    setValue(helo);
   }
  return (
    <>
    <h1 onClick={() => handleClick()} >{value}</h1>
    </>
  );
}
