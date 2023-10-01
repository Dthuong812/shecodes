import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import {withErrorBoundary} from "react-error-boundary"
import ErrorComponents from '../components/common/ErrorComponents';

const LayoutAuthentication = (props) => {
    const {children, heading} = props;
    return (
        <div className='w-full min-h-screen p-10 bg-[#A4CDE3] bg-gradient-to-r from-[#dbaaa6] via-[#c8c8fa] to-[#c8c8fa] '>
            <Link to= "/" className='inline-block mb-5 lg:mb-16'>
                <h1 className='text-2xl font-bold'>GLU-CLOSE</h1>
            </Link>
            <div className='w-full max-w-[482px] rounded-xl px-5 py-8 lg:px-16px lg:py-12 mx-auto bg-g_white'>
                <h1 className='mb-3 text-2xl font-bold text-center lg:text-4xl text-text1'>{heading}</h1>
                <div className="flex mx-11 ">
                    <button className="flex py-3 rounded-lg bg-primary w-[308px] h-[48px] ">
                        <img srcSet="./vector.png " alt="" className='w-[20px] h-[20px] ml-16 '/>
                        <p className='ml-3 text-base font-bold text-g_white width-[146px]'>Đăng nhập với Google</p>
                    </button>
                    <button className="">
                        <img src="./fb.png" alt="" className='mx-3'/>
                    </button>
                </div>
                <div className="flex px-11">
                    <div className="w-[96px] h-[1px] bg-[#E7ECF3] mt-8"></div>
                    <p className='text-[#84878B] mt-5 mx-[10px]'> hoặc tiếp tục với </p>
                    <div className="w-[96px] h-[1px] bg-[#E7ECF3] mt-8"></div>
                </div>
                {children}
            </div>
            
        </div>
    );
};
LayoutAuthentication.propTypes ={
    heading:PropTypes.string,
    children:PropTypes.node
}
export default withErrorBoundary(LayoutAuthentication,{
    FallbackComponent:ErrorComponents
});