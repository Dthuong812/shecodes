import React from 'react';
import Time from './Time';
import { Link } from 'react-router-dom';

const Content = () => {
    return (
        <div className="flex flex-col ">
         <div className="flex ">
         <div>
            <h1 className="py-5 pl-6 text-2xl font-bold text-text1">CHÚC BẠN MỘT NGÀY TỐT LÀNH !</h1>
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

        <h1 className="py-3 mx-6 text-xl font-bold text-text3">Tổng quát</h1>
        <div className="flex flex-row mr-3">

            <div className="w-[250px] h-[440] border border-gray-400 rounded-lg py-5 ml-6">
                <p className="mb-3 font-bold text-center text-text3">Chỉ số đường huyêt</p>
                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg bg-gray-200 ">
                    <span className="">Ngày 7</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 6</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 5</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 4</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 3</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 2</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>

                <div className="flex flex-row items-center justify-between px-8 my-7 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-grey-300 mx-5 rounded-lg  bg-gray-200 ">
                    <span className="">Ngày 1</span>
                    <span className="font-bold text-red-400">5.6%</span>
                </div>
            </div>

            <div className="w-[250px] h-[440] border border-gray-400 rounded-lg py-5 ml-6">
                <p className="mb-3 font-bold text-center text-text3">Chế độ dinh dưỡng</p>
                <ul className="px-6">Bữa sáng
                <li className="px-7">+ 1 bát phở gà</li>
                <li className="px-7">+ hoa quả</li>
                </ul>

                <ul className="px-6">Bữa trưa
                <li className="px-7">+ 1 bát cơm</li>
                <li className="px-7">+ canh bí đỏ nấu thịt</li>
                <li className="px-7">+ đậu phụ</li>
                <li className="px-7">+ cá kho</li>
                <li className="px-7">+ hoa quả</li>
                </ul>

                <ul className="px-6">Bữa tối
                <li className="px-7">+ 1 bát cơm</li>
                <li className="px-7">+ rau cải luộc</li>
                <li className="px-7">+ thịt kho</li>
                <li className="px-7">+ hoa quả</li>
                </ul>
                
                <ul className="px-6">Bữa phụ: bánh flan</ul>

            </div>

        <div className="w-[250px] h-[440] border border-gray-400 rounded-lg py-5 ml-6">
                <p className="mb-3 font-bold text-center text-text3">Bài tập thể dục</p>
                <div className="flex flex-row items-center my-7">
                    <img src="./td2.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.youtube.com/watch?v=PFTYktkYKRI&list=PLknC8iDtTlBYUwn77NAixO0LSa6z5_0qk&pp=iAQB"}>Workout cho người béo phì</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td7.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.youtube.com/watch?v=21SJ2EclGiU&list=PLknC8iDtTlBb6b3IGBo3s__e6Weef-YcR"}>Bài tập cho mẹ bầu</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td6.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.youtube.com/watch?v=q96d_w14BWU&list=PLknC8iDtTlBZ9hTgquJQTr6r0qnD1gCFd"}>Bài tập cho người bắt đầu</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td3.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.youtube.com/watch?v=mfRGabWhBcQ&list=PLDh6UAgf3aBEjy_ro1UBWe3LxYT45XQVy"}>Exercies kiểm soát đường huyết</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td8.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.youtube.com/watch?v=9DjkfxpxXXw"}>Bài tập cho người cao tuổi</Link>
                </div>
        </div>

        <div className="w-[380px] h-[440] border border-gray-400 rounded-lg py-5 ml-6">
                <p className="mb-3 font-bold text-center text-text3">Cập nhật tin tức</p>
                <div className="flex flex-row items-center my-7">
                    <img src="./news1.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3 " />
                    <Link to={"https://www.vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/dau-hieu-som-bao-hieu-benh-tieu-duong/"}>Triệu chứng bệnh tiểu đường</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./news2.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"http://bvtamtridongthap.com.vn/vn/nguyen-nhan-va-trieu-chung-cua-benh-tieu-duong.html"}>Nguyên nhân và triệu chứng bệnh tiểu đường</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./news3.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://www.vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/suc-khoe-tong-quat/cac-bien-chung-nguy-hiem-cua-benh-tieu-duong/"}>Biến chứng nguy hiểm của bệnh tiểu đường</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td3.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={"https://vinmec.com/vi/tin-tuc/thong-tin-suc-khoe/dinh-duong/thap-dinh-duong-cho-nguoi-tieu-duong/"}>Tháp dinh dưỡng cho người tiểu đường</Link>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./td8.jpg" alt="" className="w-[40px] h-[40px] rounded-full ml-6 mr-3" />
                    <Link to={""}>Chi phí</Link>
                </div>
        </div>
    
        </div>
        </div>
    );
};

export default Content;