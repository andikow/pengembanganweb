import React from 'react';
import './../assets/css/profil.css'
import profil from './../assets/img/profil.PNG';
import {Link} from 'react-router-dom';
import Loading from './loading.js';


export default class Profil extends React.Component{

  render(){

    return(
    <>
    <Loading/>
    <div className="content px-0">
        <div className="view-account">
            <section className="module">
                <div className="module-inner">
                    <div className="side-bar">
                        <div className="user-info">
                            <img className="img-profile rounded-circle img-responsive center-block" src={profil} alt=""  />
                            <p>Sona</p>
                        </div>
                        <nav className="side-menu">
                            <ul className="nav">
                                <li><Link to ="/profil"><span className="fa fa-user"></span> My Account</Link></li>
                                <li><Link to ="/profil/order"><span className="fa fa-box-alt"></span> My Orders</Link></li>
                                <li className="active"><Link to ="/profil/sosial"><span className="fa fa-users"></span> Social Accounts</Link></li>
                                <br/><br/><br/><br/>
                                <li><a href="#"><span className="fa fa-user-times"></span> Delete Account</a></li>
                                <li><Link to ="/"><span className="fa fa-sign-out-alt"></span> Logout</Link></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content-panel">
                        <div className="content-header-wrapper">
                        <h2>Social Accounts</h2>
                        <br/>
                        <p>If you have multiple social networks accounts (like Facebook & Google) - you can link your social accounts with your account at our store. This will allow you to access the website more conveniently!</p>
                        <br/><br/>
                        <h2>Connect new account</h2>
                        <br/>
                        <div class="row">
                          <div class="col-xl-4">
                            <button className="btn btn-outline-primary my-0" type="button"><a href="https://id-id.facebook.com/login.php"><i className="fab fa-facebook-square" style={{fontSize:20}}></i><span>&emsp;Link Facebook account</span></a></button>
                          </div>
                          <div class="col">
                            <button className="btn btn-outline-primary my-0" type="button"><a href="https://accounts.google.com/signin/v2/identifier?hl=id&refresh=1)%2C&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i className="fab fa-google" style={{fontSize:20}}></i><span>&emsp;Link Google account</span></a></button>
                          </div>
                        </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>

    </>
    )
  }
}
