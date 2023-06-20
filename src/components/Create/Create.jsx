import React from "react"
import "./Create.css"

export const Create = () => {
  return (
    <>
    
        <section className='container boxItems'>
        <div className='img '>
            <img src='https://img.freepik.com/free-photo/modern-technology-trending-innovation-concept_53876-21317.jpg?w=1380&t=st=1687230818~exp=1687231418~hmac=86b2ed8ecb76a60f23413ce7a7e4b05ea0c62601c21b21ec321f83e49ae5b527'
             alt='imae' class='image-preview' />
          </div>
          <form>
            <div className='inputfile flexCenter'>
              <input type='file' accept='image/*' alt='img' />
            </div>
            <input type='text' placeholder='Title' />

            <textarea name='' id='' cols='30' rows='10'></textarea>

            <button className='button'>Create Post</button>
          </form>
        
        </section>
    
    </>
  )
}