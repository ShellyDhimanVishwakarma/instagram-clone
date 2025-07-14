import React from 'react';
import './signUp.css';

const signUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
         <img
          className='logoImgform'
          src='https://brandlogo.org/wp-content/uploads/2024/03/Instagram-Wordmark-2016-Logo.png.webp'
          alt='Instagram Logo'
        />
        <p>Sign up to see photos and videos from your friends.</p>

        <button className="facebook-button">Log in with Facebook</button>

        <div className="divider">
          <hr /> <span>OR</span> <hr />
        </div>

        <form>
          <input type="text" placeholder="Mobile Number or Email" />
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button className="signup-button">Sign up</button>
        </form>

        <p className="terms">
          By signing up, you agree to our <b>Terms</b>, <b>Data Policy</b> and <b>Cookies Policy</b>.
        </p>
      </div>

      <div className="login-link">
        Have an account? <a href="#">Log in</a>
      </div>
    </div>
  );
};

export default signUp;
