import { useState } from "react";
import refresh from "./icon svg/refresh-svgrepo-com(1).svg"
const CaptchaCode = (props) => {
  const [refreshButton,setRefresh]=useState(true)
  const changeHandler=()=>{
    setRefresh(!refreshButton)
  }
  let alphaNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let emptyArr = [];
  for (let i = 1; i <= 5; i++) {
    emptyArr.push(alphaNums[Math.floor(Math.random() * alphaNums.length)]);
  }
  let captchacodeVALUE = emptyArr.join("");
  props.onSave(captchacodeVALUE )
  return (
    <div className="flex items-center">
      <div className="p-1 w-auto border border-red-600">
        <p className={`mr-4 ml-2 text-lg inline-block rotate-[12deg]`}>{captchacodeVALUE[4]}</p>
        <p className={`mr-4 text-lg transform rotate-[45deg] inline-block`}>{captchacodeVALUE[3]}</p>
        <p className={`mr-4 text-lg transform rotate-[-45deg] inline-block`}>{captchacodeVALUE[2]}</p>
        <p className={`mr-4 text-lg transform rotate-[68deg] inline-block`}>{captchacodeVALUE[1]}</p>
        <p className={`mr-4 text-lg transform rotate-[8deg] inline-block`}>{captchacodeVALUE[0]}</p>
      </div>
      <img onClick={changeHandler} src={refresh} className="w-5 rotate-135 mr-1 cursor-pointer"/>
    </div>
  );
};

export default CaptchaCode;
