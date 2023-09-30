import React from 'react';
import PropTypes from "prop-types"
const Label = (props) => {
    const {children, htmlFor="" , className=""}= props
    return (
        <label htmlFor={htmlFor}
        className={`text-[9px] font-medium text-text3 cursor-pointer inline-block ${className} lg:text-base lg:mx-11 lg:mt-3`}>
            {children}
        </label>
    );
};
Label.propTypes ={
    children:PropTypes.node,
    htmlFor:PropTypes.string,
    className:PropTypes.string,
}
export default Label;