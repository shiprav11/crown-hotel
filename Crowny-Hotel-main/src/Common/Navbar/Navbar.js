import React, { useContext, useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { UserContext } from "../../App"

const Navbar = () => {
  const [click, setClick] = useState(false)
 const handleClick = () => setClick(!click)
 const closeMobileMenu = () => setClick(false)
 const {state}=useContext(UserContext);

 const RenderMenu = () =>{
  if(state)
  {
    return(
      <>
      <div className='container flex_space'>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
       <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
           
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            
            
            
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            </ul>
            </div>
            <div className='login-area flex'>
            <li>
      <Link to='/Logout '>
        <i class='far fa-chevron-right'></i>Log out
      </Link>
    </li>
            </div>
      </>
    )
  }
  else{
    return(
      <>
        <div className='container flex_space'>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
      <li>
      <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
           
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            
            
            
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            </ul>
            </div>
            <div className='login-area flex'>
      <li>
      <Link to='/sign-in'>
        <i class='far fa-chevron-right'></i>Login
      </Link>
    </li>
    <li>
      <Link to='/register'>
        <i class='far fa-chevron-right'></i>Register
      </Link>
    </li>
    <li>
      <Link to='/contact'>
        <button className='primary-btn'>Request a Quote</button>
      </Link>
    </li>
    </div>
    </>
    )
  }
 }
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li>
            <div className='logo'>
            <img src='images/logo.png' alt='' />
          </div>
            </li>
          
           
          </ul>

         
           
            < RenderMenu /> 
          </div>
       
       
      </nav>

    </>
  )
}

export default Navbar
