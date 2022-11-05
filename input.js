import { useState } from "react";
import keyboard from "./icon svg/keyboard-svgrepo-com.svg";

const Input = (props) => {
  const [inputNumber, setInputNumber] = useState("");
 
  const changeHandler = (event) => {
    setInputNumber(event.target.value);
    props.onChange(event.target.value);
  };
  
  return (
    <div className="flex w-full border border-gray-300 rounded-[2.8px] sm:w-auto md:w-[300px] lg:w-[360px] font-iran ">
      <input
        value={inputNumber}
        onChange={changeHandler}
        type={props.type}
        placeholder={props.placeholder}
        className="w-full px-2 pt-[12px] pb-[8px] sm:pl-0 sm:max-w-[280px]  text-sm border-none outline-none md:py-3"
      />
      <div className="flex justify-end items-center   ">
        <img className="w-7  ml-2" src={keyboard} />
        <img className="w-5 ml-4 lg:ml-0" src={props.icon} />
      </div>
    </div>
  );
};

export default Input;
