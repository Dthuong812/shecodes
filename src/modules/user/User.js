import React from 'react';
import PersonalInfoForm from './PersonInfoForm';
import FileForm from './FileForm';

const User = () => {
    return (
        <div>
            <div className="flex flex-row items-center mx-10 mt-10">
                <img src="./user.png" alt="" className="w-[100px] h-[100px] object-cover" />
                <h1 className="mx-5 text-3xl font-bold text-text3">Nguyen An</h1>
            </div>
            <div className="flex flex-col items-center mt-8 ml-8 w-[1200px]">
                <h1 className='text-2xl font-bold text-center '>Thông tin cá nhân</h1>
                <div className="grid grid-cols-2 gap-8">
                <PersonalInfoForm></PersonalInfoForm>
                <FileForm></FileForm>
               <div className="flex flex-row items-center justify-center">
               <div className="mx-8 mt-6">
                        <button
                        type="submit"
                        className="px-4 py-2 text-white bg-red-400 rounded-md hover:bg-blue-600"
                    >
                        Chỉnh sửa
                    </button>
                    </div>
                    <div className="mt-6">
                        <button
                        type="submit"
                        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                        Lưu thông tin
                    </button>
                    </div>
               </div>
                </div>
            </div>
            
        </div>
    );
};

export default User;