import React from "react"
import mypicture from "../../images/input.png"
import "./account.css"

export const Account = () => {
  return (
    <>
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className='img flexCenter'>
                <input type='file' accept='image/*' src={mypicture} alt='img' />
                <img src={mypicture} alt='mage' class='image-preview' />
              </div>
            </div>
            <div className='right'>
              <label htmlFor=''>Username</label>
              <input type='text' />
              <label htmlFor=''>Email</label>
              <input type='email' />
              <label htmlFor=''>Password</label>
              <input type='password' />
              <button className='button'>Update</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}