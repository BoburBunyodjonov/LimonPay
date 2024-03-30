import { DollarOutlined, NumberOutlined } from '@ant-design/icons';
import React from 'react';

import MoneyKurs from "../assets/kurs.png"

const ExchangeRateChart = () => {
  return (
    <div className='bg-white w-full py-10 space-y-4'>
        <div className="container mx-auto">
            <h1 className='text-2xl font-semibold'>Exchange Rates</h1>
        </div>
        <div className="container mx-auto grid grid-cols-2 gap-5">
              <div className='flex space-y-2 flex-col justify-center rounded-lg p-7 bg-[#F8F8FA]'>
                <div className='relative w-full flex justify-between items-center'>
                  <input className='w-full text-3xl font-bold border-b p-3 outline-none bg-inherit' placeholder='0' type="number" name="" id="" />
                  <span className='font-bold text-xl absolute right-0'>USD</span>  
                </div>
                <div className='w-full relative  flex justify-between items-center'>
                  <input className='w-full text-3xl font-bold border-b p-3 outline-none bg-inherit' placeholder='0' type="number" name="" id="" />
                  <span className='font-bold text-xl absolute right-0'>UZS</span>  
                </div><br />
                <span className=' space-x-2'>
                  <DollarOutlined /> 
                  <span className='font-semibold'> 1 USD = 12620.09 UZB</span>
                </span>
                <span className=' space-x-2'>
                <NumberOutlined />
                 <span className='font-semibold'> The course is automatically updated every 10 minutes</span>
                </span>
              </div>
              <div className='rounded-lg p-7 bg-[#F8F8FA]'>
                  <img className='w-full' src={MoneyKurs} alt="" />
              </div>
        </div>
    </div>
  );
};

export default ExchangeRateChart;