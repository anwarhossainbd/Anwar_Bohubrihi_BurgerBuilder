import React, {Component} from 'react';
import {Button} from "react-bootstrap";

import axios from 'axios';

import { connect } from 'react-redux';

const mapStateToProps=state=>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
        purchasable: state.purchasable
    }
}

class Checkout extends Component {
    constructor() {
        super();
        this.state={
            values:{
                deliveryAddress: "",
                phone: "",
                paymentType: "Cash On Delivery",
            }
        }
    }

    goBack=()=>{
        this.props.history.goBack("/");
    }

    submitHandler = () => {
        const order={
            ingredients: this.props.ingredients,
            price:this.props.totalPrice,
            customer:this.state.values,
            orderTime:new Date(),
        }

        axios.post("https://burgerbuilder-a780d-default-rtdb.firebaseio.com/orders.json",order)
            .then(response=>console.log(response))
            .catch(err=>console.log(err))
    }

    inputChangerHandler=(event)=>{
       let  name=event.target.name;
       let  value=event.target.value;

        this.setState({
            values:{
                ...this.state.values,
                [name]:value
            }
        })
    }

    render() {
        return (
            <div>


                <h4 style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginTop:"30px"
                }} >{this.props.totalPrice} BDT.</h4>

                <form style={{
                    border: "1px solid grey",
                    boxShadow: "1px 1px #888888",
                    borderRadius: "5px",
                    padding: "20px",
                    marginTop:"30px"
                }} >
                    <h2 style={{marginTop:"15px",textAlign:"center",fontSize:"24px",color:"navy"}}>Please Provide Your Information</h2><br/>

                    <textarea name="deliveryAddress" value={this.state.values.deliveryAddress} className="form-control" onChange={(event)=>this.inputChangerHandler(event)} placeholder="Your Address"></textarea><br/>
                    <input name="phone" className="form-control" value={this.state.values.phone} onChange={(event)=>this.inputChangerHandler(event)} placeholder="Enter Your phone Number"/><br/>
                    <select name="paymentType" value={this.state.values.paymentType} onChange={(event)=>this.inputChangerHandler(event)} className="form-control">
                        <option value="Cash On Delivery">Cash On Deleviery</option>
                        <option value="Bkash">Bkash</option>
                    </select><br/>

                    <Button style={{ backgroundColor: "#D70F64" }} className="mr-auto" onClick={this.submitHandler}>Place Order</Button> &nbsp;
                    <Button color="secondary" className="ml-1" onClick={this.goBack}>Cancel</Button>

                </form>
                
            </div>
        );
    }
}

export default connect(mapStateToProps)(Checkout);