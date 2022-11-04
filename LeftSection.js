import Carousel from "./Carousel";
import logo from "./Images/logo.png";
import LeftBottom from "./LeftBottom";
const LeftSection=()=>{
    return(
        <div className="bg-blue-950 shadow-2xl text-white  mt-0 px-1 py-12 mx-auto flex flex-col justify-center items-center  sm:mr-0 lg:py-[56px] ">
            <Carousel />
            <img className="w-[70px] self-center mt-20 lg:mt-28" src={logo}  />
            <LeftBottom />
          </div>
    )
}

export default LeftSection;