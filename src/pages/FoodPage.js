import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import ListFood from '../modules/listfood/ListFood';

const FoodPage = () => {
    return (
        <div className='flex flex-col'>
        <Search></Search>
        <div className="flex flex-row">
        <HomeHeader></HomeHeader>
        <ListFood></ListFood>
        </div>
     </div>
    );
};

export default FoodPage;