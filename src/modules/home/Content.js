import React from 'react';
import Time from './Time';

const Content = () => {
    return (
        <div className="flex ">
            <div>
            <h1 className="py-5 pl-6 text-2xl font-bold text-text1">CHÚC MỘT NGÀY TỐT LÀNH !</h1>
            <div className="pt-5 pl-6 mt-3 ml-6 border rounded-lg border-darkStroke bg-slate-400 w-[880px] flex items-center justify-around">
                <div className="">
                <h1 className="text-2xl font-bold text-text1 ">
                    GLUCLOSE xin chào 
                </h1>
                <p className="py-4 ">
                Sức khỏe là thứ mà ta không nhìn thấy được, là yếu tố<br></br> sống còn của mỗi con người. Hãy nâng niu quý trọng <br></br>sức khỏe, đừng để khi mất rồi mới thấy hối tiếc.
                </p>
                </div>
                <img src="./banner.svg" alt="" className="" />

            </div>
            </div>
            <div className="mt-5">
                <Time></Time>
            </div>
        </div>
    );
};

export default Content;