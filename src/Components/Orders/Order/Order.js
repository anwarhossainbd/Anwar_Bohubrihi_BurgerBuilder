import React from 'react';

const Order = (props) => {
    const ingredientSummary=props.order.ingredients.map(item=>{
        return(
            <span style={{
                border:"1px solid grey",
                borderRadius:"5px",
                padding:"5px",
                marginRight:"10px"
            }} key={item.type}>{item.amount} X <span style={{textTransform:"capitalize"}}>{item.type}</span></span>
        )
    })
    return (
        <div  className="mt-5 col-8 offset-2" style={{
            border:"1px solid grey",
            boxShadow:"1px 1px #888888",
            borderRadius:"5px",
            padding:"20px",
            marginBottom:"10px"
        }}>
            <p>Order Number:{props.order.id}</p>
            <p>Delivery Address:{props.order.customer.deliveryAddress}</p>
            <hr />
            {ingredientSummary}
            <hr/>
            <p>Total:{props.order.price}BDT</p>
        </div>
    );
};

export default Order;