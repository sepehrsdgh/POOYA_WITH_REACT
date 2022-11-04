import refresh from "./icon svg/refresh-svgrepo-com(1).svg"
const CaptchaCode = () => {
  return (
    <div className="flex items-center">
      <div className="p-1 w-auto border border-red-600">
        <p className="mr-4 ml-2 text-lg inline-block rotate-45">6</p>
        <p className="mr-4 text-lg transform rotate-12 inline-block">7</p>
        <p className="mr-4 text-lg inline-block">8</p>
        <p className="mr-4 text-lg inline-block rotate-12">9</p>
        <p className="mr-4 text-lg inline-block -rotate-45">5</p>
      </div>
      <img src={refresh} className="w-5 rotate-135 mr-1"/>
    </div>
  );
};

export default CaptchaCode;
