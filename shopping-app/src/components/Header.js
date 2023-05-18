import React, {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Dropdown from './Dropdown';
import logo from '../images/logo.png'


export default function Header() {
    const [view, setView] = useState(false);
    return (
        <div className='header-container'>
            <a className = 'link' href='/'>
                <img className = 'logo' src={logo} alt = '로고'/>
                <div className='shopping_name'>COZ Shopping</div>
            </a>
            <div className='hamburger_menu' onClick={() => {setView(!view)}}>
                <RxHamburgerMenu size="34"/>
                {view && <Dropdown/>}
            </div>
        </div>
    );
}

