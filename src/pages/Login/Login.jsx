import React from "react"
import "./Login.css"
import back from "../../images/my-account.jpg";
import  {Link} from "react-router-dom"

export const Login = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

    <main>
        <div class="top-img"></div>
        <form class="col-lg-5 col-md-7 col-sm-8 col-10 shadow bg-white p-5 text-center">
            <h1 class="mb-5">Login</h1>
            <input type="email" class="form-control my-4 rounded-0 p-0" placeholder="Enter Email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email'" />
            <input type="password" class="form-control my-4 rounded-0 p-0" placeholder="Enter Password" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Email'" />
            <button class="btn text-white text-uppercase rounded-0 mt-5 mb-4 btn-block">Login</button>
            <Link href="#" class="f-pass">Forgot Password?</Link>
        </form>
    </main>
        </div>
      </section>
    </>
  )
}