import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../assets/images/logo.png'

import { links } from '../assets/data'

import { FaBars } from 'react-icons/fa'
import { MdOutlineClose } from 'react-icons/md'


import './navbar.css'


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
        <div className="container nav__container">
            <Link 
                to='/' 
                className='logo' 
                onClick={()=> setIsNavShowing(false)}
            >
                <img src={logo} alt="Nav Logo" />
            </Link>
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => (
                        <li key={path}>
                            <NavLink 
                                to={path} 
                                key={index} 
                                className={({isActive})=> (isActive ? 'active-nav' : '')}
                                onClick={()=> setIsNavShowing(prevState => !prevState)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <button className='nav__toggle-btn' onClick={()=> setIsNavShowing(prevState => !prevState)}>
                { !isNavShowing ? <FaBars /> : <MdOutlineClose /> }
            </button>
        </div>
    </nav>
  )
}

export default Navbar