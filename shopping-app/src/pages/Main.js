import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer';

export default function Main() {
    return (
        <div>
            <Header/>
            <div className='main'>메인페이지입니다.</div>
            <Footer/>
        </div>
    );
}

