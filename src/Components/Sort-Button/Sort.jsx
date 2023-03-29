import React from 'react';

const Sort = ({children}) => {
  // console.log(props)
  // const {children} = props
    return (
        <div className='text-center mb-10'>
          <button className='bg-red-600 px-8 py-2 rounded-xl text-black mt-5 hover:bg-red-800'>{children}</button>  
        </div>
    );
};

export default Sort;