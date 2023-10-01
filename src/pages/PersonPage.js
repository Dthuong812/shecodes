import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import User from '../modules/user/User';

const PersonPage = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader></HomeHeader>
            <User></User>
           </div>
        </div>
    );
};

export default PersonPage;