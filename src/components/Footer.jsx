import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import "./Footer.css"

export const Footer = () => {

  return (
    <>
      <footer className='boxItems'>
        <div className='container-flex d-flex style'  >
        
          <p>Marve-forte - All right reserved</p>
          
          <div  className='social ms-auto '>
            <BsFacebook className='icon me-1 me-md-1 me-sm-1 me-lg-4 me-xxl-4' />
            <RiInstagramFill className='icon me-1 me-md-1 me-sm-1 me-lg-4 me-xxl-4' />
            <AiFillTwitterCircle className='icon me-1 me-md-1 me-sm-1 me-lg-4 me-xxl-4' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}