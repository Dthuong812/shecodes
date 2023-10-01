import React from 'react';
import { Link } from 'react-router-dom';

const IntroAbout = () => {
    return (
        <div>
            <div className=" flex flex-col w-[1200px] mx-4">
                <h1 className="mt-3 mb-5 text-2xl font-bold text-[#F86316]">GLU-CLOSE LÀ GÌ?</h1>
                <p className="text-justify ">GLU-CLOSE là giải pháp công nghệ thông minh, thân thiện của chúng tôi dành cho bệnh nhân tiểu đường Việt Nam được thiết kế để cung cấp sự hỗ trợ và hướng dẫn cá nhân hóa. Với các thuật toán tiên tiến và phân tích dữ liệu theo thời gian thực. Giải pháp của chúng tôi giúp bệnh nhân theo dõi lượng đường trong máu, theo dõi lượng thuốc tiêu thụ và đưa ra lựa chọn sáng suốt về lối sống. Ngoài ra, nó còn cung cấp các tính năng tương tác như hỗ trợ lập kế hoạch bữa ăn và khuyến nghị tập thể dục để giúp bệnh nhân quản lý tình trạng của mình một cách hiệu quả.</p>
                <h1 className="mt-3 mb-5 text-2xl font-bold text-[#F86316]">Ý NGHĨA TÊN GLU-CLOSE</h1>
                <p className="text-justify ">GLUCLOSE - một thương hiệu bắt nguồn từ sự kết hợp giữa GLUCOSE và CLOSE, nhằm mục đích giảm thiểu nguy cơ biến chứng bệnh tiểu đường bằng cách cung cấp các giải pháp sáng tạo. Trọng tâm của chúng tôi là cung cấp sự hỗ trợ thân thiện cho bệnh nhân tiểu đường, đảm bảo rằng họ cảm thấy được kết nối chặt chẽ với các sản phẩm và dịch vụ của chúng tôi (close to patients). Bằng cách theo sát nhu cầu và mối quan tâm của bệnh nhân, chúng tôi cố gắng nâng cao sức khỏe tổng thể và giảm nguy cơ biến chứng bệnh tiểu đường của họ (close the risks).</p>
                <h1 className="mt-3 mb-5 text-2xl font-bold text-[#F86316]">DỊCH VỤ CUNG CẤP</h1>
                <div className="grid grid-cols-4 gap-5">
                    <div className="flex flex-col p-2 border border-gray-300 bg-[#FFBE9D] rounded-lg">
                        <img src="./image 26.png" alt="" className="m-2" />
                        <Link to={"/sugar"} className="pl-5 mt-3 mb-5 text-xl font-bold text-text3">Nhật kí đường huyết</Link>
                    </div>
                    <div className="flex flex-col p-2 border border-gray-300 bg-[#FFBE9D] rounded-lg">
                        <img src="./image 33.png" alt=""  className="m-2"/>
                        <Link to={"/food"} className="pl-5 mt-3 mb-5 text-xl font-bold text-text3">Chế độ dinh dưỡng</Link>
                    </div>
                    <div className="flex flex-col p-2 border border-gray-300 bg-[#FFBE9D] rounded-lg">
                        <img src="./image 35.png" alt="" className="m-2" />
                        <Link to={"/sport"} className="pl-5 mt-3 mb-5 text-xl font-bold text-text3">Thể dục</Link>
                    </div>
                    <div className="flex flex-col p-2 border border-gray-300 bg-[#FFBE9D] rounded-lg">
                        <img src="./image 36.png" alt="" className="m-2" />
                        <Link to={"/new"} className="pl-5 mt-3 mb-5 text-xl font-bold text-text3">Tin tức</Link>
                    </div>
                </div>
                <div className="flex items-center justify-around mt-10 flex-rows">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold text-center text-text3">GLU-CLOSE</h1>
                    <p className="">close to patients - close the risks</p>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-xl font-bold text-center text-text3">Liên kết nhanh</h3>
                    <Link to={"/sugar"} className="">Nhật kí đường huyết</Link>
                    <Link to={"/food"} className="">Chế độ dinh dưỡng</Link>
                    <Link to={"/sport"} className="">Thể dục</Link>
                    <Link to={"/new"} className="">Tin tức</Link>
                </div>
                <div className="flex flex-col ">
                    <h3 className="text-xl font-bold text-center text-text3">Mạng xã hội</h3>
                    <Link to={"/facebook"} className="">Facebook</Link>
                    <Link to={"/instagram"} className="">Instagram</Link>
                    <Link to={"/youtube"} className="">Youtube</Link>
                    <Link to={"/tiktok"} className="">TikTok</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default IntroAbout;