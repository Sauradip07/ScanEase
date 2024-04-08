import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import "./Signup.css"
const Signup = () => {

    useEffect(() => {
        var swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          parallax: true,
          speed: 600,
          autoplay: 3500,
          loop: true,
          grabCursor: true
        });
      }, []);

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-form-inner">
          <div className="logo">
            <svg height="512" viewBox="0 0 192 192" width="512" xmlns="http://www.w3.org/2000/svg">
              <path d="m155.109 74.028a4 4 0 0 0 -3.48-2.028h-52.4l8.785-67.123a4.023 4.023 0 0 0 -7.373-2.614l-63.724 111.642a4 4 0 0 0 3.407 6.095h51.617l-6.962 67.224a4.024 4.024 0 0 0 7.411 2.461l62.671-111.63a4 4 0 0 0 .048-4.027z" />
            </svg>
          </div>
          <h1 className="body-tex">Login</h1>
          <p className="body-text">See your growth and get consulting support!</p>

          <a href="#" className="rounded-button google-login-button">
            <span className="google-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                {/* Google SVG Path */}
                <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00" />
            <path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8" />
            <path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446" />
            <path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336" />
              </svg>
            </span>
            <span className="body-text">Sign in with google</span>
          </a>

          <div className="sign-in-seperator">
            <span>or Sign in with Email</span>
          </div>

          <div className="login-form-group">
            <label htmlFor="email">Email <span className="required-star">*</span></label>
            <input type="text" placeholder="email@website.com" id="email" />
          </div>
          <div className="login-form-group">
            <label htmlFor="pwd">Password <span className="required-star">*</span></label>
            <input autoComplete="off" type="password" placeholder="Minimum 8 characters" id="pwd" />
          </div>

          <div className="login-form-group single-row">
            <div className="custom-check">
              <input autoComplete="off" type="checkbox" checked id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <a href="#" className="link forgot-link">Forgot Password ?</a>
          </div>

          <a href="#" className="rounded-button login-cta">Login</a>

          <div className="register-div">Not registered yet? <a href="#" className="link create-account">Create an account ?</a></div>
        </div>
      </div>
      <div className="onboarding">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* Swiper slides */}
            <img src="https://img.freepik.com/free-vector/abstract-flat-design-background_23-2148450082.jpg?size=626&ext=jpg&ga=GA1.1.1286474015.1708934801&semt=sph" alt="" class="banner"></img>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
