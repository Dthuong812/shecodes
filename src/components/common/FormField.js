import React from 'react';

const FormField = ({children}) => {
    return (
        <div className="flex flex-col gap-y-[6px] mb-2 lg:mb-3">
            {children}
        </div>
    );
};

export default FormField;