import './navbar.css'
import React, { useState, useEffect } from 'react'
import { TiThMenu } from 'react-icons/ti';
import { Outlet, Link } from "react-router-dom";


export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

    }, [])
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <div className='main-nav-division'>
        <nav>
            {(toggleMenu || screenWidth > 500) && (
                <ul className="list">
                    <Link to="/" className="items1">Home</Link>
                    <Link to="/about" className="items2">About</Link>
                    <Link to="/contacts" className="items3">Contact</Link>
                    <Link to="/projects" className="items4">Projects</Link>
                </ul>
            )}

            <button onClick={toggleNav} className="btn"><TiThMenu className='btn-nav' /></button>
            <Outlet />
        </nav>
        </div>

    )
}