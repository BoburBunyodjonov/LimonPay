import Header from "../components/Header"
import "./home.css"

// Images
import RocketImg from "../assets/rocket.png"
import MonitoringImg from "../assets/monitoring.png"
import TransferImg from "../assets/transfer.png"
import Pillow from "../assets/pillow-72a0f928.png"


import { Button } from "antd"
import Footer from "../components/Footer"
import { Slider } from "../components/Slider"
import ExchangeRateChart from "../components/ExchangeRateChart"



const Home = () => {


  return (
    <>
      <Header/>
      <div className="w-full bg-[#f4f5f7]">
      <div className="container px-3 mx-auto grid md:grid-cols-2 gap-3 py-10">
          <iframe className=" rounded-xl" width="100%" height="400" src="https://www.youtube.com/embed/mnKQa3ow4CY?si=-34WlPhz7YlfbX9M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe className=" rounded-xl" width="100%" height="400" src="https://www.youtube.com/embed/kGD-hYg4ITY?si=vn0LISnmP02wZ2zJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-3 py-10">
            <div className="text-center space-y-3 p-5">
                <img className="w-24 h-32 mx-auto" src={MonitoringImg} alt="" /><br />
                <h1 className="text-2xl font-bold">Monitoring</h1>
                <p className="text-[rgb(165_170_180)]">The easiest way to manage your money right from your smartphone. Anywhere in the world. Anytime. In any situation.</p>
            </div>
            <div className="text-center space-y-3 p-5">
                <img className="w-24 h-32 mx-auto" src={TransferImg} alt="" /> <br />
                <h1 className="text-2xl font-bold">Payments</h1>
                <p className="text-[rgb(165_170_180)]">More convenient and safer than physical bank cards and cash, and also allows you to protect your personal data when paying in stores.</p>
            </div>
            <div className="text-center space-y-3 p-5">
                <img className="w-24 h-32 mx-auto" src={RocketImg} alt="" /> <br />
                <h1 className="text-2xl font-bold">Fast reaction</h1>
                <p className="text-[rgb(165_170_180)]">If you receive a call from an unscrupulous scammer or encounter unpleasant software errors, please contact our call center. We are always in touch!</p>
            </div>
      </div>
      <div className="w-full bg-[#f4f5f7]">
          <div className="container mx-auto px-3 py-10 grid md:grid-cols-2">
            <div className="flex justify-center items-center">
              <div>
              <h1 className="text-3xl font-bold">Limon Pay</h1><br />
              <p className="text-lg font-extralight">Through us, you can transfer money and make payments in a convenient and secure way throughout the country. Pay for purchases through our website and mobile application.</p><br />
              <Button size="large" type="primary" className="bg-[#ffc007] text-black">More details</Button>
              </div>
            </div>
            <div className="flex justify-end items-center">
              <img src={Pillow} alt="" />
            </div>
          </div>
      </div>

      <ExchangeRateChart/>
      {/* <PaymentForm/> */}
      
      <Slider/>

      <Footer/>
    </>
  )
}

export default Home