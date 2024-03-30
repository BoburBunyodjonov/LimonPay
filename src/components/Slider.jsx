

  import ArtelImg from "../assets/artel_logo.svg"
import TreeImg from "../assets/broccoli_logo.svg"
import BurgerLogo from "../assets/bs_burger_logo.svg"
import ExpressLogo from "../assets/express_logo.svg"
  
  const LOGOS = [
 <div className="w-full h-[150px] bg-white flex justify-center items-center rounded-xl">
       <img src={ArtelImg} className=" object-contain w-[100px]" />
 </div> ,
<div className="w-full h-[150px] bg-white flex justify-center items-center rounded-xl">
        <img src={TreeImg} className=" object-contain w-[100px]" />
</div> ,
   <div className="w-full h-[150px] bg-white flex justify-center items-center rounded-xl">
     <img src={BurgerLogo} className=" object-contain w-[100px]" />
   </div> ,
    <div className="w-full h-[150px] bg-white flex justify-center items-center rounded-xl">
        <img src={ExpressLogo} className=" object-contain w-[100px]" />
    </div> ,
  ];
  
  export const Slider = () => {
    return (
      <div className="bg-[#f4f5f7] py-10">
        <div className="container mx-auto py-5">
            <h1 className="text-3xl font-bold">Partners</h1>
        </div>
      <div className="relative m-auto w-[100%] overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider gap-7 flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[300px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[300px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
            <br />
      <div className="relative m-auto w-[100%] overflow-hidden bg-[#f4f5f7] before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider2 gap-7 flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[300px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[300px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
      
      </div>

    );
  };
  