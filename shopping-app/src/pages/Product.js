import React,{useState, useEffect} from 'react';
// import All from '../images/전체.png'
// import product from '../images/상품.png'
// import category from '../images/카테고리.png'
// import exhibition from '../images/기획전.png'
// import brand from '../images/브랜드.png'


export default function Product() {

    const[datas, setDatas] = useState([])
    // const[categoryItem,setCategoryItem] = useState("All")
    useEffect(()=> {
        fetch("http://cozshopping.codestates-seb.link/api/v1/products?")
        .then((res) => res.json())
        .then((data) => setDatas(data))
    },[]);
    
    // const categoryImg = [
    // { img: All, title: "전체", type: "All" },
    // { img: product, title: "상품", type: "Product" },
    // { img: category, title: "카테고리", type: "Category" },
    // { img: exhibition, title: "기획전", type: "Exhibition" },
    // { img: brand, title: "브랜드", type: "Brand" },
    // ];
    console.log(datas)

    // const onchangeCategory = (category) => {
    //     setCategoryItem(category.type)
    // }
    return (
        <div>
            <div className='main'>
                <ul className='category-list'>
                    {/* {categoryImg.map((item, index) => {
                    <li key={index} onClick={onchangeCategory(item.type)}>
                        <img className = "product_img" src={All} alt='전체'/>
                        <div className={item.type === categoryItem
                        ? 'active_category': 'category-title'}>
                        {item.title}
                        </div>
                    </li>
                    })} */}
                </ul>
            </div>
        </div>
    );
}

