/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render(){
    
    return (      
      <div>        
        <div className="container" id="container">
          
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="button">Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button type="button">Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={console.log("Clicked!")}> Register</button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    )};
    
}
