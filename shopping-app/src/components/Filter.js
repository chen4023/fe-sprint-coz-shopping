import React, { useState } from 'react';
import { HiStar } from "react-icons/hi";
import Modal from './Modal';

export default function Filter({product}) {
  const [modalOn, setModalOn] = useState(false);
  const [imageTarget, setImageTarget] = useState("");
  const [imageTitle, setimageTitle] = useState("")

  const handleModal = (imageUrl, title) => {
    setModalOn(!modalOn);
    setImageTarget(imageUrl);
    setimageTitle(title);
  }
  console.log(product);
  return (
    <ul className='product-list'>
      {product.map((product) => {
        switch (product.type) {
          case 'Product':
            return (
              <li key={product.id} className='product'>
                <img onClick={()=> handleModal(product.image_url, product.title )} className = "product_img" src={product.image_url} alt={product.title}/>
                <HiStar className='star'/>
                <div className='product-box'>
                  <p className='title'>{product.title}</p>
                  <p className='discount-percentage'>{product.discountPercentage} %</p>
                </div>
                  <div className='price'>{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원</div>
              </li>
            );
          case 'Category':
            return (
              <li key={product.id} className='product'>
                <img onClick={()=> handleModal(product.image_url, product.title)} className = "product_img" src={product.image_url} alt={product.title}/>
                <HiStar className='star'/>
                <div className='content-box'>
                  <p className='title'># {product.title}</p>
                </div>
              </li>
            );
          case 'Exhibition':
            return (
              <li key={product.id} className='product'>
                <img onClick = {()=> handleModal(product.image_url, product.title)} className = "product_img" src={product.image_url} alt={product.title}/>
                <HiStar className='star'/>
                <div className='content-box'>
                  <p className='title'>{product.title}</p>
                  <div className='sub_title'>{product.sub_title}</div>
                </div>
              </li>
            );
          case 'Brand':
            return (
              <li key={product.id} className='product'>
                <img onClick = {()=> handleModal(product.brand_image_url, product.brand_name)} className = "product_img" src={product.brand_image_url} alt={product.title}/>
                <HiStar className='star'/>
                <div className='brand-box'>
                  <p className='title'>{product.brand_name}</p>
                  <div className='follower'>
                    <p className='follower_title'>관심 고객 수</p>
                    <p className='follower_num'>{product.follower.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                  </div>
                </div>
              </li>
            );
          default:
            return null;
        }
      })}
      {modalOn && <Modal imageUrl = {imageTarget} title = {imageTitle} onClose={handleModal}/>}
    </ul>
  );
}

