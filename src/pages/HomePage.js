import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import Content from '../modules/home/Content';

const HomePage = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader></HomeHeader>
           <Content></Content>
           </div>
        </div>
    );
};

export default HomePage;