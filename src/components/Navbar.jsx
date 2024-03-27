
// Images
import Logo from "../assets/site_logo.svg";
import AppleLogo from "../assets/apple_logo.svg";
import GooglePlayLogo from "../assets/google-play_logo.svg";



import { NavLink, Link } from "react-router-dom";

// Ant Design
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const Navbar = () => {

  const items = [
    {
      label: <a href="https://www.antgroup.com">English</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">Russian</a>,
      key: '1',
    },
    {
      label: <a href="https://www.aliyun.com">O`zbekcha</a>,
      key: '2',
    },
    {
      label: <a href="https://www.aliyun.com">Qoraqalpoq</a>,
      key: '3',
    }
  ];

  return (
    <div className="w-full bg-[rgb(23_23_28)] ">
      <div className="container border-b border-gray-600 px-3 py-8 mx-auto grid md:grid-cols-3 items-center">
        <img src={Logo} alt="" />
        <ul className="flex space-x-3">
          <li className="">
            <NavLink className="text-white text-lg">Loyiha haqida</NavLink>
          </li>
          <li className="">
            <NavLink className="text-white text-lg">Yangiliklar</NavLink>
          </li>
        </ul>
        
        <div className="flex space-x-6 items-center">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['2'],
          }}
          trigger={["click"]}
        >
          <a  onClick={(e) => e.preventDefault()}>
            <Space className="text-white border border-[rgb(43_43_48)] p-2 rounded-md">
              O`zbekcha
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
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
  );
};

export default Navbar;
