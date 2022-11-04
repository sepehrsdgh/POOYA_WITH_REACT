import CaptchaCode from "./CaptchaCode";
import logo from "./Images/university logo.png";
import Input from "./input";
import contact from "./icon svg/contacts-svgrepo-com.svg";
import lock from "./icon svg/lock-svgrepo-com.svg";
import exlamintion from "./icon svg/exclamation-mark-svgrepo-com.svg";
const RightSection = () => {
  return (
    <div className="space-y-3 shadow-2xl max-w-lg px-4 py-12 bg-gray-950 mx-auto mt-3 flex flex-col justify-center items-center sm:py-6 sm:ml-0 sm:mt-0 lg:px-[36px] lg:py-[48px]">
      <img className="w-20" src={logo}></img>
      <h1 className="max-w-sm text-[16px] font-bold">
        پرتال ورود یکپارچه اعضا
      </h1>
      <Input placeholder="نام کاربری" icon={contact} />
      <Input placeholder="رمز عبور" icon={lock} />
      <Input placeholder="کد امنیتی" icon={exlamintion} />
      <CaptchaCode />
      <p className="text-center text-sm -my-4 sm:w-64 md:w-72 lg:w-[370px]">
        کاراکترهایی که در تصویر مشاهده می نمایید در فیلد کد امنیتی به ترتیب وارد
        نمایید.
      </p>
      <div className="w-full text-center flex flex-col space-y-2  sm:flex-row sm:items-center sm:justify-between md:w-[340px] ">
        <button className="w-full bg-blue-950 p-2 text-white rounded sm:w-auto sm:py-2 sm:px-6 sm:mr-4 md:px-12 lg:px-16 lg:-mr-4 ">
          ورود
        </button>
        <p className="hover:underline underline-offset-4 text-blue-500 text-xs xs:text-left sm:w-[44px] sm:ml-4 md:w-64 lg:-ml-4  ">
          فراموشی رمز ورود
        </p>
      </div>
    </div>
  );
};

export default RightSection;
