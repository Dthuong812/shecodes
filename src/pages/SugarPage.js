import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';



const SugarPage = () => {
    return (
        <div className='flex flex-col'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader></HomeHeader>
        </div>
        </div>

    );
};

export default SugarPage;