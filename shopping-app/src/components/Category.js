import React,{useState} from 'react';
import { getCategories } from '../category_data';
import { NavLink } from 'react-router-dom';
import Filter from './Filter';


const Category = ({datas}) => {
  const [filteredlist, setFilteredList] = useState(datas)
  let arr = [];
  const categories = getCategories();
  const filterProduct = (type) => {
    if(type === 'All'){
      arr = datas
    }
    else{
      arr = datas.filter((item) => {
        return item.type === type
      })
    }
    setFilteredList(arr);
  }
  console.log(filteredlist)

  return (
    <div>
      <div className='category-list'>
        {categories.map((category, index) => (
          <NavLink
            className='categories'
            onClick={() => filterProduct(category.type)}
            to={`/product/${category.name}`}
            key={index}
            style={({ isActive }) => {
              return {
                textDecoration: isActive ? 'underline' : '',
                color: isActive ? '#452CDD' : '',
              };
            }}
          >
            <div className='category'>
              <img className='category-img' src={category.img} alt={category.name} />
              <div className='category-title'>{category.text}</div>
            </div>
          </NavLink>
        ))}
      </div>
      <div className='main'>
        <div className='product-container'>
          <Filter product={filteredlist}/>
        </div>
      </div>
    </div>
  );
};

export default Category;