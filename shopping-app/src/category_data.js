import All from './images/전체.png'
import product from './images/상품.png'
import category from './images/카테고리.png'
import exhibition from './images/기획전.png'
import brand from './images/브랜드.png'


const categories = [
  {
    img: All,
    name: 'all',
    text: '홈',
    type: 'All'
  },
  {
    img: product,
    name: 'products',
    text: '상품',
    type: 'Product'
  },
  {
    img: category,
    name: 'category',
    text: '카테고리',
    type: 'Category'
  },
  {
    img: exhibition,
    name: 'exhibition',
    text: '기획전',
    type: 'Exhibition'
  },
  {
    img: brand,
    name: 'brand',
    text: '브랜드',
    type: 'Brand'
  }
  
];

  export function getCategories() {
    return categories;
  }
  
  // export function getProductListByCategory(type) {
  //   return categories.find((category) => category.type === type);
  // }