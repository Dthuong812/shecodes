import React from 'react'
import moment from 'moment';
import Time from '../../modules/home/Time'
import JsonDataDisplay from '../sugar/Board';


const weekday = ["Chủ nhật","Thứ hai","Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ 7"];

const date = moment().format("MM / DD/ YYYY");
const d = new Date();
let day = weekday[d.getDay()];

const AddComponent = () => {

  return (
    <div>
        {/* INPUT */}
        <div classname = "h-[200px]">
                <h1 className='py-5 pl-6 text-2xl font-bold text-text1'>
                    NHẬT KÍ ĐƯỜNG HUYẾT 
                </h1>
                <p className="py-4 ml-5">
                    Thứ: {day},
                    Ngày: {date}
                </p>
                <div className = '@apply flex w-[1017px] h-[108px] items-start gap-[22px] shrink-0;'>
                    <div className='ml-5 '>
                        <h2 className='@apply text-black text-base not-italic font-normal leading-[normal];mb-3
                font-family: Poppins;'>Chỉ số đường huyết</h2>
                        <input placeholder='MMOL/L' type="text" className=" @apply inline-flex h-[50px] items-center shrink-0 border pl-6 pr-[88px] py-[13px] rounded-2xl border-solid border-[rgba(19,19,19,0.25)] ; " />
                    </div>
                    <div className=''>
                    <h2 className='@apply text-black text-base not-italic font-normal leading-[normal];mb-3
                font-family: Poppins;'>Chỉ số huyết áp</h2>
                        <input placeholder='MMHG' type="text" className=" @apply inline-flex h-[50px] items-center shrink-0 border pl-6 pr-[88px] py-[13px] rounded-2xl border-solid border-[rgba(19,19,19,0.25)] ; " />
                    </div>
                    <div className='@apply w-[189px] h-[52px] shrink-0 fill-[#F48585] mt-6'>
                    <button class="bg-rose-300 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-full @apply w-[189px] h-[52px] shrink-0 ">
                    Cập nhật
                    </button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddComponent