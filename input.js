import keyboard from "./icon svg/keyboard-svgrepo-com.svg"

const Input=(props)=>{
    return(
        <div className="flex w-full border border-gray-300 rounded-[2.8px] sm:w-auto md:w-[300px] lg:w-[360px] ">
        <input placeholder={props.placeholder} className="w-full p-2 py-2.5 sm:pl-0 sm:max-w-[280px]  text-sm border-none outline-none md:py-3" />
        <div className="flex justify-end items-center   ">
           <img className="w-7  ml-2" src={keyboard}/>
           <img className="w-5 ml-4 lg:ml-0" src={props.icon}/>
        </div>
        </div>
    )
}

export default Input;