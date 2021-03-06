import React from 'react';
import './../assets/css/orderdetail.css'
import {Link} from 'react-router-dom';
import Loading from './loading.js';

export default class OrderDetail extends React.Component{
  constructor(props) {
    super(props)

    this.state = {
      orderDetail : [],
      statusID : '',
      isPaid : false,
      isPacking : false,
      isShipping : false,
      isFinish : false
    }
    var id = this.props.match.params.id;
    this.getOrderDetail(id)
  }

  getOrderDetail(id) {
    fetch('http://localhost:8000/orderdetail/' + id,{
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      }
    })
    .then(response => response.json())
    .then(res => {
      this.setState({
        orderDetail : res,
        statusID : JSON.parse(res[0].StatusID)
      })
      if(this.state.statusID == 2) {
        this.setState({isPaid : true})
        this.setState({isPacking : true})
      }
      else if(this.state.statusID == 3) {
        this.setState({isPaid : true})
        this.setState({isPacking : true})
        this.setState({isShipping : true})
      }
      else if(this.state.statusID == 4){
        this.setState({isPaid : true})
        this.setState({isPacking : true})
        this.setState({isShipping : true})
        this.setState({isFinish : true})
      }
    })
  }
  render(){
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return(
    <>
    <Loading/>
    <div className="content">
      <div className="container">

        <div className="row">
          <div className="col">
            <h2>Order #ID000{this.state.orderDetail.slice(0,1).map((item, index)=>(<span>
              {item.OrderID}</span>
            ))
          }</h2>
          </div>
          <div className="col" style={{textAlign:'right'}}>
            <p className="font-weight-bold">Order Date : {this.state.orderDetail.slice(0,1).map((item, index)=>(<span>
              {item.OrderDate}</span>
            ))
          }</p>
          </div>
        </div>


          <br/>

          <div className="row pt-2">
          <div className="card-body">
            <div className="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
              <div className="step completed">
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-hourglass"></i></div>
                </div>
                <h4 className="step-title">Confirmed Order</h4>
              </div>
              <div className={this.state.isPaid? "step completed" : "step"}>
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-money-check-alt"></i></div>
                </div>
                <h4 className="step-title">Payment</h4>
              </div>
              <div className={this.state.isPacking? "step completed" : "step"}>
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-box-full"></i></div>
                </div>
                <h4 className="step-title">Packing</h4>
              </div>
              <div className={this.state.isShipping? "step completed" : "step"}>
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-shipping-fast"></i></div>
                </div>
                <h4 className="step-title">Shipping</h4>
              </div>
              <div className={this.state.isFinish? "step completed" : "step"}>
                <div className="step-icon-wrap">
                  <div className="step-icon"><i className="fa fa-check"></i></div>
                </div>
                <h4 className="step-title">Product Delivered</h4>
              </div>
            </div>
          </div>



      </div>

      {

        this.state.orderDetail.map((item, index)=>(
          <>
          <div class="row">
          <div class="col-lg-2">
          <img src={item.PictureLink1}  alt="" height="200px" width="180px"  />
          </div>

          <div class="col pl-4">
          <h3>{item.Name}</h3>
          <p>Size: {item.size}</p>
          <p>Color: {item.ColorName}</p>
          <p>Quantity: {item.Qty}</p>
          <p>Price: IDR {numberWithCommas(item.Price)}</p>

          </div>
          </div>

      <br/>

      <div class="box">
        <div class="row">
          <div class="col">
            <h2><i className="fa fa-shipping-fast"></i> Shipping: International Standard</h2>
            <br/>
                <h5>Shipping Address</h5>
                <div class="row">
                  <div class="col-lg-3">
                    <p>Name</p>
                    <p>Street Address</p>
                    <p>Building Name</p>
                    <p>Country</p>
                    <p>Zip Code</p>
                    <p>City / Town</p>
                  </div>
                  <div class="col">
                    <p>: {item.FirstName} {item.LastName}</p>
                    <p>: {item.Address}</p>
                    <p>: {item.Building}</p>
                    <p>: {item.Country}</p>
                    <p>: {item.ZipCode}</p>
                    <p>: {item.City}</p>
                  </div>
                </div>


          </div>
          <div class="col-xl-4">
            <h2>Total : IDR {numberWithCommas(item.Total)} </h2>
            <br/>
            <h5>Order Overview</h5>
            <div class="row">
              <div class="col-lg-4">
                <p>Subtotal</p>
                <p>Shipping</p>
                <p>Sales Tax</p>
                <br/>
                <p>Payment</p>
              </div>
              <div class="col">
                <p>: IDR {numberWithCommas(item.Subtotal)} </p>
                <p>: IDR {numberWithCommas(item.ShippingCosts)} </p>
                <p>: IDR {numberWithCommas(item.SalesTax)}</p>
                <br/>
                <p>: <span style={{fontWeight:'bold', fontSize:17}}>Paypal</span></p>
              </div>
            </div>

          </div>
        </div>



      </div>
      </>
      ))
    }

      </div>
    </div>
    </>
    )
  }
}
