import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  let token=localStorage.getItem("token")
  const [isLogin,setIsLogin]=useState(token ? false : true)
  let user=JSON.parse(localStorage.getItem("user"))

  useEffect(()=>{
    setIsLogin(token ? false : true)
  },[token])  //dependency

  const checkLogin=()=>{
    if(token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)

    }
    else{
      setIsOpen(true)
    }
  }

  return (
    <>
        <header style={{backgroundColor:"black", color:"white"}}>
            <h2>ಊಟ ಮಾಡಿ!</h2>
            <ul>
                <li><NavLink to="/" style={{color:"white"}}>Home</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/myRecipe" : "/"} style={{color:"white"}}>My Recipe</NavLink></li>
                <li onClick={()=>isLogin && setIsOpen(true)}><NavLink to={ !isLogin ? "/favRecipe" : "/"} style={{color:"white"}}>Favourites</NavLink></li>
                <li onClick={checkLogin}><p className='login'>{ (isLogin)? "Login": "Logout" }{user?.email ? `(${user?.email})` : ""}</p></li>
            </ul>
        </header>
       { (isOpen) && <Modal onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)}/></Modal>}   
    </>
  )
}
