import CaptchaCode from "./CaptchaCode";
import logo from "./Images/university logo.png";
import Input from "./input";
import contact from "./icon svg/contacts-svgrepo-com.svg";
import lock from "./icon svg/lock-svgrepo-com.svg";
import exlamintion from "./icon svg/exclamation-mark-svgrepo-com.svg";
import { useState } from "react";
const RightSection = () => {
  const [captchaCodeCorrect,setCaptchaCodeCorrect]=useState(true)
  let InputCaptchaCode=""
  let captchaCode=""
  const changeHandler=(number)=>{
     InputCaptchaCode=number
  }

  const captchaCodeSaver=(number)=>{
    captchaCode=number
  }
  const submitHandler=(event)=>{
    event.preventDefault();
    if(InputCaptchaCode===captchaCode){
      alert("true")
      setCaptchaCodeCorrect(true)
    }
    else{
      alert("false")
      setCaptchaCodeCorrect(false)
    }
  }
  return (
    <form onSubmit={submitHandler} className="space-y-3 shadow-2xl max-w-lg px-6 py-12 pb-6 bg-gray-950 mx-auto mt-3 flex flex-col justify-center items-center sm:py-6 sm:ml-0 sm:mt-0 lg:px-[36px] lg:py-[48px]">
      <img className="w-20" src={logo}></img>
      <h1 className="max-w-sm text-[16px] font-bold font-iran">
        پرتال ورود یکپارچه اعضا
      </h1>
      {!captchaCodeCorrect&&<span className="bg-red-200 w-full text-red-800 font-iran  text-sm   pt-3 pb-2 flex justify-center items-center">کد امنیتی اشتباه است.لطفا مجدد وارد نمایید. </span>}
      <Input type="text" placeholder="نام کاربری" icon={contact} />
      <Input type="password" placeholder="رمز عبور" icon={lock} />
      <Input  onChange={changeHandler} type="text" placeholder="کد امنیتی" icon={exlamintion} />
      <CaptchaCode onSave={captchaCodeSaver} />
      <p className="text-center text-sm -my-4 sm:w-64 md:w-72 lg:w-[370px] font-iran">
        کاراکترهایی که در تصویر مشاهده می نمایید در فیلد کد امنیتی به ترتیب وارد
        نمایید.
      </p>
      <div className="w-full text-center flex flex-col space-y-2  sm:flex-row sm:items-center sm:justify-between md:w-[340px] ">
        <button className="w-full bg-blue-950 p-2 text-white rounded sm:w-auto sm:py-2 sm:px-6 sm:mr-4 md:px-12 lg:px-16 lg:-mr-4 font-iran ">
          ورود
        </button>
        <p className="hover:underline underline-offset-4 text-blue-500 text-xs xs:text-left sm:w-[44px] sm:ml-4 md:w-64 lg:-ml-4 font-iran ">
          فراموشی رمز ورود
        </p>
      </div>
    </form>
  );
};

export default RightSection;
