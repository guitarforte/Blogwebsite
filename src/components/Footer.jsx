import React from "react"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import { BsFacebook } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

export const Footer = () => {
    const style = {
        padding : '0px 100px'
    }
    const font = {
        fontSize : '20px'
    }
  return (
    <>
      <footer className='boxItems'>
        <div className='container-flex d-flex text-align-center' style={style}>
        
          <p>Marve-forte - All right reserved</p>
          
          <div style={font} className='social ms-auto'>
            <BsFacebook className='icon me-4' />
            <RiInstagramFill className='icon me-4' />
            <AiFillTwitterCircle className='icon me-4' />
            <AiFillLinkedin className='icon' />
          </div>
        </div>
      </footer>
    </>
  )
}