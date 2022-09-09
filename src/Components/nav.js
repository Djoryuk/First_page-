import React,{useState} from 'react'
import logo from '../asset/logo.png'
//assets
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineMenu} from 'react-icons/ai'

//Styling
import '../Styles/navbar.css';
export default function NavBar() {
    const [colapse,setColapse]= useState(false)
    const handleClick = () =>{
        setColapse(!colapse)
    }
    return (
        <nav>
            <div className="navbar">  
                <img src={logo} alt="logo.png" className="logo" />
    <ion-icon name="menu-outline" id="menu-icon"></ion-icon>

    <ul className="socialMedia-list">
        <li>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillFacebook size={"2rem"}/></a>
        </li>
        <li>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillTwitterSquare size={"2rem"}/></a>
        </li>
        <li>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><AiFillInstagram size={"2rem"}/></a>
        </li>
    </ul>

    <button className='btn-no-styling' onClick={handleClick}>
        <AiOutlineMenu size={"2rem"} style={{marginLeft: 30}}/>
    </button>
    </div>
    {colapse?
        <div className="bg-white text-center border-bottom-2 p-0">
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="display-block p-20">About</a>  
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="display-block p-20">services</a>  
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="display-block p-20">Support</a>  
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="display-block p-20">contact</a>      
        </div>
        :
        <></>
    }
       
    </nav>
)
}
