import React from 'react';
import { useSelector } from "react-redux";
import Filter from '../components/Filter';



export default function BookMark() {
    const state = useSelector((state) => state.Reducer);
    const getBookMarkArrs = state;
    return (
        <div>
            <div className='main'>북마크 페이지 입니다</div>
            <ul>
            {getBookMarkArrs && getBookMarkArrs.map((item) => (
                <Filter
                    product={item}
                    bookMarkData = {getBookMarkArrs}
            />
        ))}
        </ul>
        </div>
    );
}

