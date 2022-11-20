import React from 'react';


const Form = ({
  
  className,
  children,
  width = 'md:w-[519px] sm:w-[400px] '
}) => {
  return (
    <div
      className={`flex flex-col ${width} bg-base-100/[0.1]  m-auto border border-base-100/[.2] border-solid 
        space-y-5  px-8 py-10 ${className}`}
    >
      
      {children}
    </div>
  );
};

export default Form;