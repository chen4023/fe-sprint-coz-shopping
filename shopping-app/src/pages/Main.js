import React,{useEffect, useState} from 'react';
import Filter from '../components/Filter';
import { useSelector } from 'react-redux';



export default function Main() {
    const [product, setProduct] = useState([]);
    useEffect(()=> {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?count=4")
        .then((res) => res.json())
        .then((data) => setProduct(data))
    },[]);

    const getBookMarkArrs = useSelector((state) => state.bookMarkReducer.bookmarks);

    console.log(getBookMarkArrs)

    return (
        <div>
            <div className='main'>
                <div className='main_container'>
                    <div className='sub_container'>
                        <h2 className='main_title'>상품 리스트</h2>
                        <Filter product = {product}/>
                    </div>
                    <div className='sub_container'>
                        <h2 className='main_title'>북마크 리스트</h2>
                        {getBookMarkArrs? 
                        <Filter product={getBookMarkArrs}/>: ''}
                    </div>
                </div>
            </div>
        </div>
    );
}


