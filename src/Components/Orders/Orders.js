import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchOrder} from "../../Redux/ActionCreators"
import Order from "./Order/Order";
import Spinner from "../Spinner/Spinner";

const mapStateToProps=state=>{
    return{
        orders:state.orders,
        orderLoading:state.orderLoading,
        orderErr:state.orderErr,
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        fetchOrder:()=>dispatch(fetchOrder()),
    }
}

class Orders extends Component {
    componentDidMount() {
        this.props.fetchOrder();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props)
    }

    render() {

        let orders=null;
        if (this.props.orderErr){
            orders=<p style={{
                border:"1px solid grey",
                borderRadius:"5px",
                padding:"15px",
                marginRight:"10px",
                marginTop:"10px"
            }}>Sorry Failed to load orders</p>
        }
        else {
            if (this.props.orders.length===0){
                orders=<p style={{
                    border:"1px solid grey",
                    borderRadius:"5px",
                    padding:"15px",
                    marginRight:"10px",
                    marginTop:"10px"
                }}>
                    You Have no order
                </p>
            }

            else {
                orders=this.props.orders.map(order=>{
                    return(
                        <Order order={order} />
                    )
                })
            }
        }


        return (
            <div  >
                {this.props.orderLoading?<Spinner />: orders}
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Orders);