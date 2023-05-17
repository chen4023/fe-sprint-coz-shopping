import React,{useState, useEffect} from 'react';



export default function Product() {

    const[datas, setDatas] = useState([])
    useEffect(()=> {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?")
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[]);
    
    console.log(datas)

    return (
        <div>
            <div className='main'>
                <div className='category-list'>
                    <div className='category'>
                        <img className='category-img' src='images/전체.png' alt='전체'/>
                        <div className='category-title'>전체</div>
                    </div>
                    <div className='category product'>
                            <img  className='category-img' src='images/상품.png' alt='상품'/>
                            <div className='category-title'>상품</div>
                    </div>
                    <div className='category'>
                            <img className='category-img' src='images/카테고리.png' alt='카테고리'/>
                            <div className='category-title'>카테고리</div>
                    </div>
                    <div className='category'>
                            <img className='category-img' src='images/브랜드.png' alt='브랜드'/>
                            <div className='category-title'>브랜드</div>
                    </div>
                    <div className='category'>
                            <img className='category-img' src='images/기획전.png' alt='기획전'/>
                            <div className='category-title'>기획전</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

