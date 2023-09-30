import React from 'react';

const Search = () => {
    return (
        <div className='flex items-center w-full '>
            <div className='mb-3 mr-8 w-[300px]'>
                <h1 className="items-center pt-8 pl-5 text-2xl font-bold text-center text-text1">GLUCLOSE</h1>
            </div>
            <input type="text" className=" w-[800px] h-6 py-5 mt-5 border rounded-lg w-70 border-primary px-5 mr-5" />
            <div className="mt-4">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="54" height="54" rx="10" fill="#899CE2"/>
                <path d="M27.0216 16.1667C23.0349 16.1667 19.8066 19.395 19.8066 23.3817V25.6567C19.8066 26.3933 19.5032 27.4983 19.1241 28.1267L17.7482 30.4233C16.9032 31.8425 17.4882 33.4242 19.0482 33.9442C24.2266 35.6667 29.8274 35.6667 35.0057 33.9442C36.4682 33.4567 37.0966 31.745 36.3057 30.4233L34.9299 28.1267C34.5507 27.4983 34.2474 26.3825 34.2474 25.6567V23.3817C34.2366 19.4167 30.9866 16.1667 27.0216 16.1667Z" fill="#899CE2" stroke="white" stroke-width="1.7" stroke-miterlimit="10" stroke-linecap="round"/>
                <path d="M30.6076 34.3883C30.6076 36.3708 28.9826 37.9958 27.0001 37.9958C26.0142 37.9958 25.1042 37.5842 24.4542 36.9342C23.8042 36.2842 23.3926 35.3742 23.3926 34.3883" fill="#899CE2"/>
                <path d="M30.6076 34.3883C30.6076 36.3708 28.9826 37.9958 27.0001 37.9958C26.0142 37.9958 25.1042 37.5842 24.4542 36.9342C23.8042 36.2842 23.3926 35.3742 23.3926 34.3883" stroke="white" stroke-width="1.7" stroke-miterlimit="10"/>
            </svg>
            </div>
            <img src="./user.png " alt="" className='mx-5 mt-6'/>
            <p className="mx-5 mt-5 font-semibold text-text3">Nguyen An</p>
        </div>
    );
};

export default Search;