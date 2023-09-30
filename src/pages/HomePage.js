import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import Content from '../modules/home/Content';

const HomePage = () => {
    return (
        <div className='flex flex-col'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader></HomeHeader>
           <Content></Content>
           </div>
        </div>
    );
};

export default HomePage;