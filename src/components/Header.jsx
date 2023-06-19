import React from "react";
import logo from "../images/kase1.png";
import { nav } from "../assets/data";
import { Link } from "react-router-dom";
import "./header.css";
import { User } from "./User"

export const Header = () => {
   window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active", this.window.scrollY > 100)
  }) 
  return (
    <>
      <header className='header'>
        <div className='scontainer flex'>
            <img src={logo} alt='logo' width='50px' />
        <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link  className="link" to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className='account flexCenter'>
  
            <User />
          
          </div>
        </div>
      </header>
    </>
  )
}