import { Link } from "react-router-dom";
import AppleLogo from "../assets/apple_logo.svg";
import GooglePlayLogo from "../assets/google-play_logo.svg";
import Logo from "../assets/site_logo.svg";
import { PhoneOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[rgb(43_43_48)]  body-font">
        <div className="">
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img src={Logo} alt="" />
            </Link>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 space-x-5 justify-center sm:justify-start">
              <p className="text-lg font-semibold">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-green-500 px-3"
                />
                Tashkent, Chilanzar district, E-quarter, 3 building, 1a
              </p>
              <Link className="hover:text-green-500 duration-200 text-lg font-semibold">
                <PhoneOutlined className="text-green-500 px-3" /> +998 71
                277-77-07
              </Link>
            </span>
          </div>
        </div>
        <div className="container border-t border-gray-600 px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                About the service
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Partners
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Help
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    First Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className="text-[#a5aab4] hover:text-[#ffc007] hover:underline">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Download the application:
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center space-x-4 items-end md:justify-start">
                <Link className="flex border py-1 px-3 justify-center items-center space-x-3 rounded-md">
                  <img className=" w-6" src={AppleLogo} alt="" />
                  <div className="text-white">
                    <p className=" text-sm">Mavjud</p>
                    <span className="text-sm">App Store</span>
                  </div>
                </Link>
                <Link className="flex border p-1 justify-center items-center space-x-3 rounded-md">
                  <img className=" w-6" src={GooglePlayLogo} alt="" />
                  <div className="text-white">
                    <p className=" text-sm">Mavjud</p>
                    <span className="text-sm">Google Play</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#ffc007] text-center p-5">
            <p className="text-black font-semibold text-lg">© LimonPay LLC. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
};

export default Footer;
