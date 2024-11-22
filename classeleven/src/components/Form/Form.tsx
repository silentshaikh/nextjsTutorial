'use client';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Label from '../Label/Label'
interface InputTypes{
  userName:string;
  userEmail:string;
  userNumber:string;
  userMessage:string;
}
function Form() {

   const [inputValues,setInputValues] = useState<InputTypes>({userName:'',userEmail:'',userNumber:'',userMessage:''});
    
    //Handle MUltiple Input Inputs
// We are handling the input only with one state. In the previous class, we were using usestate for each input for handling and now we are handling inputs only with one state
    const onHandleInput = (e:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
      let {name,value}= e.target;
      setInputValues((prev) => ({...prev,[name]:value}));
    };
                                        // ||
    // []squre is leya lagya he ke hame nahi pata ke value kon se ayge is leya hum jab object me 
    // data gate karte the to hum . ka us karte the oar agr hamare ko pata na hu ke data kon sa ayga 
    //to  hum us ko [squre] braket me rakhte the  

    //Handle Form submission

    const onHandleSubmit = (e:FormEvent) => {
        e.preventDefault();
        if(inputValues.userEmail === '' || inputValues.userName ==='' || inputValues.userMessage ==='' || inputValues.userNumber ===''){
            alert("Plz fill all the fields")
        }else{
            alert("Your Form has submitted");
            setInputValues({userName:'',userEmail:'',userNumber:'',userMessage:''});
        }
    }
  return (
    <form className='flex flex-col' onSubmit={(e) => onHandleSubmit(e)}>
    <Label name='Name'/>
    <input className='shadow-inner outline-none  w-72 p-2' type="text" name="userName" id="" placeholder='Enter Your Name' value={inputValues.userName} onChange={(e) => onHandleInput(e)} />
    <Label name='Email'/>
    <input className='shadow-inner outline-none  w-72 p-2' type="email" name="userEmail" id="" placeholder='Enter Your Email' value={inputValues.userEmail} onChange={(e) => onHandleInput(e)} />
    <Label name='Phone'/>
    <input className='shadow-inner outline-none  w-72 p-2' type="text" name="userNumber" id="" placeholder='Enter Your Number' value={inputValues.userNumber} onChange={(e) => onHandleInput(e)}/>
    <Label name='Message'/>
    <textarea name="userMessage" id="" rows={8} className='shadow-inner outline-none  w-72 p-2 resize-none' placeholder='Enter Your Message' value={inputValues.userMessage} onChange={(e) => onHandleInput(e)} ></textarea>
    <button className='bg-teal-400 w-32 py-2 rounded-full'>Submit</button>
    </form>
  )
}

export default Form
