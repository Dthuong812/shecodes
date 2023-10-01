import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import ListFood from '../modules/food/ListFood';

const FoodPage = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
        <Search></Search>
        <div className="flex flex-row">
        <HomeHeader></HomeHeader>
        <ListFood></ListFood>
        </div>
     </div>
    );
};

export default FoodPage;