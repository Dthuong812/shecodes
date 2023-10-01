import React from 'react';
import { Link } from 'react-router-dom';

const ListSport = () => {
    return (
        <div className='flex flex-col w-[1200px] mx-4'>
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className='py-5 pl-6 text-2xl font-bold text-text1'>THỂ DỤC</h1>
                    <p className='pt-5 mt-2 ml-2'>
                        Chế độ tập luyện tốt và đúng sẽ rất hữu ích giúp kiểm soát tốt lượng đường trong máu và giảm các<br></br> biến chứng đặc biệt biến chứng tim mạch giúp cải thiện sức khỏe nói chung và các bệnh lý đặc biệt<br></br> tim mạch góp phần năng cao chất lượng cuộc sống. Tuy nhiên chế độ tập luyện cho bệnh nhân đái <br></br>tháo đường như thế nào là đúng cách và mang lại hiệu quả và phù hợp với mỗi bệnh nhân cụ thể. <br></br>Dưới đây là một số bài tập GLUCLOSE dành cho bạn.</p>
                </div>

                <div className='mt-8 ml-8'>
                    <h3 className='font-semibold text-center text-text3 '>Tìm kiếm nội dung phù hợp</h3>
                    <label class="block text-gray-500 font-bold" for="inline-full-name">
                        Loại bài tập
                    </label>
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-3" id="grid-state">
                    <option>Yoga</option>
                    <option>Danceporst</option>
                    <option>Box-xing</option>
                    <option>Erobic</option>
                    </select>
                    <label class="block text-gray-500 font-bold" for="inline-full-name">
                        Độ tuổi
                    </label>
                    <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 my-3" id="grid-state">
                    <option>Người già</option>
                    <option>Mẹ bầu </option>
                    <option>Trẻ em</option>
                    <option>Ngưới mới bắt đầu</option>
                    </select>
                </div>
                
            </div>

            <div className="grid grid-cols-4 gap-5">
                <div className="flex flex-col items-center my-7 p-3 rounded-lg  bg-[#E1ECFF] ">
                    <img src="./s1.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=9DjkfxpxXXw&ab_channel=HTVSports"}>Bài thể thao tại nhà dành cho người cao tuổi</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s2.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=PFTYktkYKRI&list=PLknC8iDtTlBYUwn77NAixO0LSa6z5_0qk&pp=iAQB"}>Thể thao tại nhà dành cho trẻ em</Link>
                </div>
    
                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s3.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=-FtMJIj-H1M&list=PLknC8iDtTlBbfqGqELPVyaCmLjYyQ1Kd2&pp=iAQB"}>Bài tập dành cho người béo phì</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s4.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=21SJ2EclGiU&list=PLknC8iDtTlBb6b3IGBo3s__e6Weef-YcR&pp=iAQB"}>Thể dục nhẹ nhàng cho mẹ bầu</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s5.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=6qPL3whgOR0&list=PLDh6UAgf3aBEAOi1ibQ-5Vd3BGLIPDWpl&pp=iAQB"}>Thể thao cho người đau khớp gối</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                <img src="./s6.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=mfRGabWhBcQ&list=PLDh6UAgf3aBEjy_ro1UBWe3LxYT45XQVy&pp=iAQB"}>Bài tập kiểm soát đường huyết</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s7.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=eOSAr25XIHY&pp=ygUUYsOgaSB04bqtcCBnacOjbiBjxqE%3D"}>Bài tập giãn cơ thư giản khi mệt mỏi</Link>
                </div>

                <div className="flex flex-col items-center my-7 p-3 rounded-lg bg-[#E1ECFF]">
                    <img src="./s8.jpg" alt="" className="" />
                    <Link to={"https://www.youtube.com/watch?v=USjQnmADRdk&list=PLv8rscmSxtPFIBZ9T1wCsRSr0sQJm0leb&pp=iAQB"}>Bài tập cho người hạ đường huyết</Link>
                </div>

                
        </div>
        </div>
    );
};

export default ListSport;