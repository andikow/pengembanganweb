import React from 'react';
import './../assets/css/checkout.css';
import paypal from './../assets/img/paypal.png';
import InputNumeric from './qtycheckout.js';
import Produk1 from '../assets/img/cart1.jpg';
import {Link} from 'react-router-dom';

export default class Checkout extends React.Component{
  constructor() {
    super()
    this.state={
      cart :[],
      subtotal:[],
      shippingcost:45000,
      FirstName: "",
      LastName: "",
      Address: "",
      Building: "",
      Country: "Indonesia",
      ZipCode: "",
      City: "",
      ShippingMethod: "International Standard",
      Phone: ""
    }
  }
  componentDidMount() {
      this.getCart();
      this.getSubtotal();
    }

  getCart() {
    fetch('http://localhost:8000/getCart/',{
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        cart : res,
      })
  })
}
  getSubtotal(){
  fetch('http://localhost:8000/getsubtotal/',{
    headers : {
      'Accept' : 'application/json',
      'Content-Type' : 'application/json'
    }
  })
  .then(response => response.json())
  .then(res => {
    this.setState({
      subtotal : res,
    })
})
}
  checkout(){
    var data = {
      ShippingID:0,
      CustomerID: 1,
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Address: this.state.Address,
      Building: this.state.Building,
      Country: this.state.Country,
      ZipCode: this.state.ZipCode,
      City: this.state.City,
      ShippingMethod: this.state.ShippingMethod,
      Phone: this.state.Phone
    }
    fetch(
      'http://localhost:8000/checkout',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(data)
      }
    ).then(respons => respons.json())
      .then(alert('New product successfully added!'))
  }
  render(){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
    <>
    <div className="contents">
    <div className="container pt-4">
      <h1>Checkout</h1>
	  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-7 col-xs-12">
      <div className="box">
          <h3 className="box-title">Shipping</h3>
            <p style={{fontWeight:'bold'}}>Send my order to</p>
                <br/>

                <form>
                  <div className="row">
                    <div className="col">
                      <label>First Name</label>
                      <input onChange={ev => this.setState({ FirstName: ev.target.value })} type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                      <label>Last Name</label>
                      <input onChange={ev => this.setState({ LastName: ev.target.value })} type="text" className="form-control" placeholder="Last name" />
                    </div>
                  </div>
                </form>

                <br/>

                <form>
                <div>
                  <label>Street address</label>
                <input onChange={ev => this.setState({ Address: ev.target.value })} type="text" className="form-control" placeholder="Street address" />
                </div>
                </form>

                <br/>

                <form>
                <div>
                  <label>Building name, etc. (if applicable)</label>
                <input onChange={ev => this.setState({ Building: ev.target.value })} type="text" className="form-control" placeholder="Building name, etc. (if applicable)" />
                </div>
                </form>

                <br/>

                <form>
                <div>
                  <label>Country</label>
                <select onChange={ev => this.setState({ Country: ev.target.value })} class="browser-default custom-select">
                  <option value="Afganistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">French Southern Ter</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option selected value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">Netherland Antilles</option>
                  <option value="Netherlands">Netherlands (Holland, Europe)</option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">Republic of Montenegro</option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                  <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">United Arab Emirates</option>
                  <option value="United States of America">United States of America</option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                  <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              </form>

              <br/>

              <div>
                <p><span style={{fontWeight:'bold'}}>Notice:</span>&nbsp;&nbsp;All orders are shipped from Indonesia. Additional costs for customs and duties may apply upon delivery, depending on product type and order price.</p>
              </div>

              <br/>

              <form>
              <div className="row">
                  <div className="col">
                      <label>Zip code</label>
                          <input onChange={ev => this.setState({ ZipCode: ev.target.value })} type="text" className="form-control" placeholder="Zip code" />
                  </div>
                  <div className="col">
                      <label>City/Town</label>
                          <input onChange={ev => this.setState({ City: ev.target.value })} type="text" className="form-control" placeholder="City/Town" />
                  </div>
              </div>
              </form>

              <br/>
              <hr/>
              <br/>

              <p style={{fontWeight:'bold'}}>Shipping Method</p>

              <div className="box-shipping">
                <input onChange={ev => this.setState({ ShippingMethod: ev.target.value })} type="radio" name="shippingmethod" value="International Standard"/>
                <p style={{fontWeight:'bold'}}>International Standard</p>
                <i className="fa fa-plus-circle"></i> Delivery date not guaranteed<br/>
                <i className="fa fa-plus-circle"></i> No tracking number<br/>
                <i className="fa fa-plus-circle"></i> Subject to import taxes, customs, and duties<br/>
              </div>

              <div className="box-shipping">
                <input onChange={ev => this.setState({ ShippingMethod: ev.target.value })} type="radio" name="shippingmethod" value="International Express"/>
                <p style={{fontWeight:'bold'}}>International Express</p>
                <i className="fa fa-plus-circle"></i> Delivery date guaranteed<br/>
                <i className="fa fa-plus-circle"></i> Tracking number<br/>
                <i className="fa fa-plus-circle"></i> Subject to import taxes, customs, and duties<br/>
                <i className="fa fa-plus-circle"></i> Not deliverable to PO Boxes<br/>
              </div>

              <br/>

              <form>
              <div>
                <label>Phone number</label>
              <input onChange={ev => this.setState({ Phone: ev.target.value })} type="text" className="form-control" placeholder="Phone number" />
              </div>
              </form>

              <br/>
              <hr/>
              <br/>

              <p style={{fontWeight:'bold'}}>Gift Wrap</p>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="" />
                <label>Gift wrap your order and send it with a personalized greeting card.</label>
              </div>
      </div>


                    <div className="box">
                        <h3 className="box-title">Payment</h3>
                        <input type="radio"/>
                        <img src={paypal} alt="paypal" width="150px"  /><br/><br/>
                        <p>&emsp;Quick and easy payment with PayPal.</p>
                        <i className="fa fa-info-circle"></i> Click on “buy” to get directed to PayPal. Please complete your purchase there within the next 3 hours. This is necessary to get your order processed and under way.<br/>
                    </div>


                    <div className="box">
                        <h3 className="box-title">Order</h3>
                        <div class="row">
                          <div class="col">Sub-total</div>
                          {this.state.subtotal.map((item, index)=>(
                          <div className="col-lg-3">IDR {numberWithCommas(item.subtotal)}</div>
                          ))}
                        </div>
                        <div class="row">
                          <div class="col">Shipping costs</div>
                          <div class="col-lg-3">IDR {numberWithCommas(this.state.shippingcost)}</div>
                        </div>
                        <div class="row">
                          <div class="col">Sales Tax</div>
                          {this.state.subtotal.map((item, index)=>(
                           <div className="col-lg-3"> IDR {numberWithCommas(0.1 * item.subtotal)}</div>
                          ))}
                        </div>

                        <hr />

                        <div class="row">
                          <div class="col" style={{fontWeight:'bold'}}>Total</div>
                          {this.state.subtotal.map((item, index)=>(
                           <div className="col-lg-3"> IDR {numberWithCommas(item.subtotal*0.1 + item.subtotal + this.state.shippingcost)}</div>
                          ))}
                        </div>

                        <hr />

                        <div class="row">
                          <div class="col">
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="" />
                            <p>I acknowledge and accept the General Terms and Conditions of Binco.</p>
                            </div>
                          </div>
                          <div class="co l-lg-3 mr-2">
                          <Link to="/myorder">
                            <button onClick={() => this.checkout()}className="btn btn-danger my-0 font-weight-bold" data-toggle="modal" data-target="#modalSuccess" type="button">Buy now</button>
                            </Link>
                          </div>

                        </div>

                    </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">

                    <div className="widget">
                        <h4 className="widget-title">Order Summary</h4>

                        <form>
                        <div>
                          <label>Coupon code</label>
                        <input type="text" className="form-control" placeholder="Coupon code" />
                        </div>
                        </form>

                        <hr/>

                        <div class="row">
                          <div class="col">Sub-total</div>
                          {this.state.subtotal.map((item, index)=>(
                          <div className="col-lg-6">IDR {numberWithCommas(item.subtotal)}</div>
                          ))}
                        </div>
                        <div class="row">
                          <div class="col">Shipping costs</div>
                          <div class="col-lg-6">IDR {numberWithCommas(this.state.shippingcost)}</div>
                        </div>
                        <div class="row">
                          <div class="col">Sales Tax</div>
                          {this.state.subtotal.map((item, index)=>(
                           <div className="col-lg-6"> IDR {numberWithCommas(0.1 * item.subtotal)}</div>
                          ))}
                        </div>

                        <hr />

                        <div class="row">
                          <div class="col" style={{fontWeight:'bold'}}>Total</div>
                          {this.state.subtotal.map((item, index)=>(
                           <div className="col-lg-6"> IDR {numberWithCommas(item.subtotal*0.1 + item.subtotal + this.state.shippingcost)}</div>
                          ))}
                        </div>

                        <hr />

                        <p style={{fontWeight:'bold'}}>Item(s)</p>
                        {this.state.cart.map((item, index)=>(
                          <div className="row border-bottom border-primary mx-1">
                            <div className="col-6 mt-1">
                              <img className="card-img-top" src={item.PictureLink1} alt="ProductLink" />
                            </div>
                            <div className="col-6 text-left">
                              <h5>{item.Name}</h5>
                              <p>Color: {item.ColorName}</p>
                              <p>Size: {item.Size}</p>
                              <p>Qty: {item.Qty}</p>
                              <h6>IDR {numberWithCommas(item.Price)}</h6>
                            </div>
                          </div>
                        ))}


                    </div>

                </div>
            </div>
            <br/>
</div>
</div>
    </>
    )
  }
}
