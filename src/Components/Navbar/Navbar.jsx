import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assests/Images/icons8-bitcoin-128.png'
import './Navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logoContainer">
            <Link to='/' className='logo'>
                <img src={Logo} alt="" />
                <h1 >CoinVerse</h1>
            </Link>
        </div>

        <div className="navLinks">
            <Link to='/' className="link">
            <img src="https://img.icons8.com/ios-filled/100/FFFFFF/home.png" alt="home"/>
                <p>Home</p>
            </Link>

            <Link to='/Cryptocurrencies' className="link">
                <p>Cryptocurrencies</p>
            </Link>

            <Link to='/exchanges' className="link">
                <p>Exchanges</p>
            </Link>

            <Link to='/news' className="link">
                <p>News</p>
            </Link>
        </div>
            {/* <button className='menuContainer'></button> */}
    </div>
  )
}

export default Navbar