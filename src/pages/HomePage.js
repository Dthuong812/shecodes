import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';

const HomePage = () => {
    return (
        <div className='flex flex-col'>
           <Search></Search>
           <HomeHeader></HomeHeader>
        </div>
    );
};

export default HomePage;