/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
const {ipcRenderer} = window.require('electron');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password:''
      
    };
  }
  // after component finish loading
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        name: 'afterDidMountName',
        email:'afterDidMount@gmail.com',
        password: 'afterDidMountPassword',
        
      });
      document.getElementById('signupLog').innerHTML=this.state.name + "\n" + this.state.email + "" + this.state.password;
      document.getElementById('signinLog').innerHTML=this.state.email + " " + this.state.password;
    },1000);
  }
  //real-time update
  componentDidUpdate(){
    this.onSignin();
  } 
  
  onTypingUserInfo = (event) =>{
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
    
  }
  onSignup = ()=> {    
    document.getElementById('signupLog').innerHTML=this.state.name + this.state.email + this.state.password; 
  }
  onSignin = ()=>{   
    //using alert('') here will break input 
    document.getElementById('signinLog').innerHTML=this.state.email + " " + this.state.password;
    ipcRenderer.send('request-user-info',this.state);
  }
  
  render(){    
    return (      
      <div>        
        <div className="container" id="container"> 
                 
          <div className="form-container sign-up-container">
            <form action="#" >
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" name='name' onChange={this.onTypingUserInfo} placeholder="Name"  />
              <input type="email" name='email' onChange={this.onTypingUserInfo} placeholder="Email" />
              <input type="password" name='password' onChange={this.onTypingUserInfo} placeholder="Password"/>
              <button type="button" onClick={this.onSignup}>Sign Up</button>
              <div id="signupLog"> signupLog </div>
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
              <input type="email" name='email' placeholder="Email" onChange={this.onTypingUserInfo} />
              <input type="password" name='password' placeholder="Password"  onChange={this.onTypingUserInfo}/>
              <a href="#">Forgot your password?</a>
              
              <button type="button" onClick={this.onSignin}>Sign In</button>
              <div id="signinLog"> signinLog </div>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn" onClick={console.log("Clicked!")}>Sign In</button>
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
