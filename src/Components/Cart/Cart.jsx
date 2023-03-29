import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
const Cart = () => {
  const [data, setData] = useState([]);
  useEffect( () => {
    const loadData = async () => {
      const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
      const value = await res.json();
      console.log(value.data.tools);
      setData(value.data.tools);
    };
    loadData();
  },[]);
  console.log(data)
    return (
      <>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:px-12 gap-5'>
          {
            data.map( singleData => <SingleData singleData=
              {singleData}
                key={singleData.id}
              
              >
              </SingleData>)
          }
        </div>
        </>
    );
};

export default Cart;