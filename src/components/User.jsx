import React, { useState } from "react"
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi"
import { RiImageAddLine } from "react-icons/ri"
import { Link } from "react-router-dom";
import "./header.css"


export const User = () => {
  const user = true
  const [profileOpen, setProfileOpen] = useState(false)
  const close = () => {
    setProfileOpen(false)
  }
  const style = {
    outline : 'none',
    textDecoration: 'none'
  }

  return (
    <>
      <div className='profile'>
        {user ? (
          <>
          
            <button className='img myimage'  onClick={() => setProfileOpen(!profileOpen)}>
        
              <img src='https://scontent.flos1-2.fna.fbcdn.net/v/t39.30808-1/247865479_103305475485118_3744718944095803205_n.jpg?stp=dst-jpg_p160x160&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFy9RAmMyuCR7uaMoR4jBqJ2A-6Br4CHrDYD7oGvgIesCCOJZr4Bg8p3jCu__m26EwTRBxoXHHVX7mEGq_269JF&_nc_ohc=1odeVHTgcioAX9DlLVb&_nc_ht=scontent.flos1-2.fna&oh=00_AfA6nAxsBp4Aa-s6OM9bWGHX0XXQRkc-YdBCf6eaTMf-og&oe=649508D8' alt='' />
            
            </button>
            {profileOpen && (
              <div className='openProfile boxItems' onClick={close}>
                <Link to='/account'>
                  <div className='image'>
                    <div className='img'>
                      <img src='https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
                    </div>
                    <div className='text'>
                      <h4>Oladeebo marvelous</h4>
                      <label>Ibadan, Nigeria</label>
                    </div>
                  </div>
                </Link>
                <Link style={style} to='/create'>
                  <button  className='box'>
                    <RiImageAddLine className='icon' />
                    <h4>Create Post</h4>
                  </button>
                </Link>
                <Link style={style} to='/login'>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                </Link>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
                <Link to="/"> Home </Link>
              </div>
            )}
          </>
        ) : (
          <button>My Account</button>
        )}
      </div>
    </>
  )
}