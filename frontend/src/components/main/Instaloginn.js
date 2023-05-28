import React from 'react';
import './insta.css';

const Instaloginn = () => {
  return (
    <div>
      <div className="outer_cont">
        <div className="container_1 ">
          <div>
            <img className="logo" src="/insta-logo.png" alt="no image found" />
          </div>
          <div>
            <input
              className=" fc "
              type="text"
              placeholder="Phone number, username, or email"
            />
            <input className=" fc" type="password" placeholder="Password" />
          </div>
          <div>
            <button className="btt">Log in</button>
          </div>
          <div className="fb_sec">
            <div className="line-1 text-secondary" />
            <div className="or text-secondary">OR</div>
            <div className="line-1" />
          </div>
          <div>
            <button className="btt">Log in with facebook</button>
          </div>
          <span className="forpass">
            {" "}
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <div className="container_2">
          <span>Don't have an account?</span>
          <a href="#">
            <span>Signup</span>
          </a>
        </div>
        <div className="getapp">
          <p>Get the app.</p>
        </div>
        <div className="appstore">
          <img className="p1" src="/apple_button.png" alt="photo_1 missing" />
          <img className="p2" src="/googleplay_button.jpg" alt="photo_2 missing" />
        </div>
        <div className="footer">
          <div className="foot1">
            <span>
              <a href="#">ABOUT US</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">SUPPORT</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">BLOG</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">PRESS</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">API</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">JOBS</a>
            </span>
            &nbsp;&nbsp;
          </div>
          <div className="foot2">
            <span>
              <a href="#">PRIVACY</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">TERMS</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">DIRECTORY</a>
            </span>
            &nbsp;&nbsp;
            <span>
              <a href="#">LANGUAGE</a>
            </span>
            &nbsp;&nbsp;
          </div>
        </div>
      </div>
    </div>

  )
}

export default Instaloginn
