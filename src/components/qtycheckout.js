import React, { Component } from "react";
import "./../assets/css/qtycheckout.css";
import {Link} from 'react-router-dom';

export default class InputNumeric extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  decrease = () => {
    if(this.state.value !== 0){
      this.setState({
        value: this.state.value - 1
      });
    }
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
        <div className="def-number-input number-input d-flex flex-wrap align-content-center justify-content-center text-center" style={{backgroundColor:"#f7f7f9", width:"127px"}}>
          <button onClick={this.decrease} className="minus"></button>
          <input className="quantity" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
          type="number" />
          <button onClick={this.increase} className="plus"></button>
        </div>
      );
  }
}
