import React from 'react';

const NewPage = () => {
    return (
        <div className='flex flex-col w-[1200px] mx-4'>
            <h1 className="mt-3 mb-5 text-2xl font-bold text-text3">TIN TỨC</h1>
            <div className='flex flex-row w-[1200px]'>
                <div className='flex flex-col w-[70%]'>
                    <div className="flex flex-row items-center my-7 ">
                    <img src="./tt1.jpg" alt="" className="w-[200px] h-[130px] rounded-2 ml-6 mr-3" />
                    <div className=''>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">Dấu hiệu nhận biết bệnh tiểu đường</h3> 
                    <p className="mb-3 text-left text-text3">Bệnh tiểu đường đang có xu hướng trẻ hóa và có những diễn biến khó lường. Khi cảm thấy buồn nôn, khát nước, chân tay tê bì, vết thương lâu lành...</p>
                    </div>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./tt2.jpg" alt="" className="w-[200px] h-[130px] rounded-2 ml-6 mr-3" />
                    <div className=''>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">Biến chứng nguy hiểm bệnh tiểu đường</h3> 
                    <p className="mb-3 text-left text-text3">Biến chứng của tiểu đường ảnh hưởng rất nhiều đến sức khỏe và có thể trở thành mối nguy hiểm cho người bệnh. Nhưng nếu có phương pháp điều trị phù hợp kết hợp với điều chỉnh lối sống có thể giúp ngăn ngừa....</p>
                    </div>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./tt3.jpg" alt="" className="w-[200px] h-[130px] rounded-2 ml-6 mr-3" />
                    <div className=''>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">Tháp dinh dưỡng cho người tiểu đường</h3> 
                    <p className="mb-3 text-left text-text3">Người bị tiểu đường luôn phải tuân thủ chế độ ăn khắt khe nhằm đảm bảo cung cấp đủ dinh dưỡng, điều chỉnh ổn định đường huyết. Tiểu đường không thể điều trị dứt điểm, vì vậy người bệnh phải duy trì.....</p>
                    </div>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./tt4.jpg" alt="" className="w-[200px] h-[130px] rounded-2 ml-6 mr-3" />
                    <div className=''>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">Tại sao người gầy vẫn bị tiểu đường?</h3>
<p className="mb-3 text-left text-text3">Tiểu đường là một tình trạng bệnh lý chỉ những rối loạn chuyển hóa không đồng nhất, có đặc điểm tăng lượng đường huyết trong cơ thể. Bất kể đối tượng nào cũng có thể mắc tiểu đường, kể cả người gầy.</p>
                    </div>
                </div>

                <div className="flex flex-row items-center my-7">
                    <img src="./tt5.jpg" alt="" className="w-[200px] h-[130px] rounded-2 ml-6 mr-3" />
                    <div className=''>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">Tại sao bệnh tiểu đường lại gây khát nước?</h3> 
                    <p className="mb-3 text-left text-text3">“Tại sao tiểu đường gây khát nước?” hay “dấu hiệu tiểu đường như thế nào?” là những vấn đề mà rất nhiều người mắc phải căn bệnh này quan tâm.</p>
                    </div>
                </div>
                </div>
                <div className='w-[250px] mx-8 border rounded-lg border-gray-200 bg-[#E1ECFF] h-[300px] p-3'>
                    <h3 className="mt-1 mb-5 font-bold text-1xl text-text3">CHUYÊN MỤC</h3>
                    <p className="mb-3 text-left text-text3">Biểu hiện của bệnh tiểu đường</p>
                    <p className="mb-3 text-left text-text3">Nguyên nhân tiểu đường</p>
                    <p className="mb-3 text-left text-text3">Biến chứng tiểu đường</p>
                    <p className="mb-3 text-left text-text3">Chế độ dinh dưỡng</p>
                    <p className="mb-3 text-left text-text3">Chế độ tập luyện</p>
                    <p className="mb-3 text-left text-text3">Câu hỏi thường gặp</p>
                </div>
                
           
           </div>

        </div>
    );
};

export default NewPage;