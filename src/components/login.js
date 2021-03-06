import React from 'react';
import '../assets/css/login.css';
import {Link} from 'react-router-dom';
import Register from './register.js';
import $ from 'jquery';

export default class Login extends React.Component{
  constructor(props) {
      super()
      this.state = {
        isLogin : false,
        modal : "",
          login : [],
          email : '',
          password : '',
          show : "password",
          isShow : false
      }
  }

  login() {
    var data = {
      email : this.state.email,
      pass : this.state.password
    }
      fetch('http://localhost:8000/login/',
      {
        method : 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      })
      .then(response => response.json())
      .then(res => {
        if(res.CustomerID > 0 ){
          this.setState({
            modal : "closeModal"
          })
          this.props.parenthandler(true);
          $('.modal-backdrop').remove()
        }
        else{
            alert('Login Gagal')
            }
          })
      }
      show() {
        if(!this.state.isShow){
          this.setState({
            show : "text",
            isShow : true

          })
        }
        else{
          this.setState({
            show : "password",
            isShow : false

          })
        }
      }

  componentDidMount(){

  }
  render(){

    return(
    <>
    <Register />
        <div className={"modal fade " + this.state.modal} id="modalLogin">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title"><h1>Login</h1></div>
              </div>
              <div className="modal-body">
                <form>
                  <p>Want to shop?
                    <span type="button" className="text-primary closeModal" data-toggle="modal" data-target="#modalRegister"><i className="fa fa-user ml-2 mr-2" />Register now</span>
                  </p>
                  <input type="email" value={this.state.email} onChange={ev=> this.setState({email : ev.target.value})} className="form-control w-100" aria-describedby="emailHelp" placeholder="Email or Username"/>
                  <p className="mt-2 mr-3 text-right w-100">
                  <input type={this.state.show} value={this.state.password} onChange={ev=> this.setState({password : ev.target.value})} className="form-control mb-1" placeholder="Password"/>
                    <span class="showhidebutton" onClick = {()=>this.show()}><i className="fas fa-eye mr-2"/>{this.state.isShow?"Hide":"Show"}</span>
                  </p>
                  <p>
                    <span className="ml-4">
                      <input type="checkbox" className="form-check-input" id="stayin"/>
                      <label htmlFor="stayin" className="form-check-label">Stay signed in</label>
                    </span>
                    <Link to="/forgotpassword">
                    <span className="float-right closeModal" type="button" data-toggle="modal" data-target="#modalForgot">
                      <h5 className="text-primary">Forgot your password?</h5>
                    </span>
                    </Link>
                  </p>
                  <Link to ="/" onClick = {()=>this.login()}><button className="btn btn-primary w-100 mt-2">Login</button></Link>
                  <Link to="/admin">
                  <button className="btn btn-primary w-100 mt-2 closeModal">Login As Admin</button></Link>
                  <p className="or mt-3"><span>or</span></p>
                  <button className="btn text-white mt-2 w-100" style={{backgroundColor: "#3B5998"}}><a class="text-white" href="https://id-id.facebook.com/login.php">
                    <i className="fab fa-facebook-square mr-2" />Log in with Facebook</a>
                  </button>

                </form>
              </div>
            </div>
          </div>
        </div>
    </>
    )
  }
}
