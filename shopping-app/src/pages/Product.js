import React, { useState, useEffect } from 'react';
import Category from '../components/Category';

export default function Product() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch('http://cozshopping.codestates-seb.link/api/v1/products')
      .then((res) => res.json())
      .then((data) => setDatas(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(datas);

  return (
    <div className='main'>
      <Category datas={datas} />
    </div>
  );
}








