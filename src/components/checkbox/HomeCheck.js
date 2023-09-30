import React from 'react';

const HomeCheck = () => {
    return (
            <div className="flex flex-col ">
                <div className="flex">
                    <input type="checkbox"/>
                    <p className="mx-2">
                         Uống thuốc
                    </p>
                </div>
                <div className="flex">
                    <input type="checkbox"/>
                    <p className="mx-2">
                         Thể dục
                    </p>
                </div>
                <div className="flex">
                    <input type="checkbox"/>
                    <p className="mx-2">
                        Uống nước
                    </p>
                </div>
                <div className="flex">
                    <input type="checkbox"/>
                    <p className="mx-2">
                       Chế độ ăn
                    </p>
                </div>
               
            </div>
    );
};

export default HomeCheck;