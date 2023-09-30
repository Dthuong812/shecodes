import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import Data from '../modules/sugar/Data'


const SugarPage = () => {
    return (
        <div className='flex flex-col'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader/>
           <Data/>
        </div>
        </div>

    );
};

export default SugarPage;