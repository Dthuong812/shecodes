import React from 'react';
import moment from 'moment';
import { HomeCheck } from '../../components/checkbox';

const Time = () => {
    const date = moment().format("MMMM DD YYYY");
    
      return (
        <div className='flex flex-col items-center w-[300px] mx-5 border border-gray-400 rounded-lg my-5'>
          <p className='text-xl font-bold text-center'> Hôm nay </p>
        <img src="./lich.jpg" alt="" className='w-10 h-10 mt-2 rounded-full '/>
        <p className="py-4">{date}</p>
        <HomeCheck></HomeCheck>
        </div>
      )
};

export default Time;