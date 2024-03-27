import IphoneImg from "../assets/iphone-4-807d87d7.png"


const Header = () => {
  return (
    <div className="w-full relative overflow-hidden bg-[rgb(23_23_28)] border-b-8 border-[#ffc007] lg:h-[70vh] flex items-end">
        <div className="container px-3 z-10 mx-auto  grid md:grid-cols-2 ">
            <div className="py-10">
                <h1 className="text-white font-semibold text-5xl">LimonPay - we can do what you need <span className="text-green-500">:)</span></h1> <br />
                <p className="text-white text-base">Through us, you can transfer money and make payments in a convenient and secure way throughout the country. Pay for purchases through our website and mobile application.</p> <br />
                <div className="space-x-3">
                    <button className="px-5 py-3 rounded-lg bg-[#ffc007]">More details </button>
                    <button className="px-5 py-3 rounded-lg bg-white ">Login to your account</button>
                </div>
            </div>
            <div className="z-10 flex justify-end items-end">
                    <img className="w-[30rem] h-[30rem]" src={IphoneImg} alt="" />
            </div>
            
        </div>
        <div className=" absolute right-[-8rem] top-[200px] w-[800px] h-[700px] rounded-[100%] bg-[#ffc007]">
            <div className="w-[400px] h-[400px] absolute right-0 bottom-10 bg-black rounded-full">
                    
            </div>
        </div>
    </div>
  )
}

export default Header