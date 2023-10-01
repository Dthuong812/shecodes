import React from 'react';
import Search from '../modules/home/Search';
import HomeHeader from '../modules/home/HomeHeader';
import ListSport from '../modules/sport/ListSport';

const SportPage = () => {
    return (
        <div className='flex flex-col bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa]'>
           <Search></Search>
           <div className="flex flex-row">
           <HomeHeader></HomeHeader>
           <ListSport></ListSport>
           </div>
        </div>
    );
};

export default SportPage;