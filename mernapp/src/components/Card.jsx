import React, { useState, useEffect, useRef } from 'react'
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
let dispatch =useDispatchCart();
const priceRef =useRef();
let data = useCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const[qty,setQty] = useState(1);
    const[size,setSize] = useState("");
    const handleAddToCart= async ()=>{
        await dispatch({type:"ADD", id:props.foodItem._id, name:props.foodItem.name, price:finalPrice, qty:qty, size:size})
        console.log(data);
    }
    let finalPrice = qty * parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[]);

    const handleQty = (e) => {
        setQty(e.target.value);
      }
      const handleOptions = (e) => {
        setSize(e.target.value);
      }
    
    return (
        <div>
    
          <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "460px" }}>
            <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
            <div className="card-body">
              <h5 className="card-title">{props.foodName}</h5>
              {/* <p className="card-text">This is some random text. This is description.</p> */}
              <div className='container w-100 p-0' style={{ height: "38px" }}>
                <select className='m-2 h-100  bg-warning  text-dark rounded'style={{ select: "#FF0000" }} onChange={handleQty}>
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>)
                  })}
                </select>
                <select className="m-2 h-100  bg-warning  text-dark rounded" style={{ select: "#FF0000" }} ref={priceRef}  onChange={handleOptions}>
                  {priceOptions.map((i) => {
                    return <option key={i} value={i}>{i}</option>
                  })}
                </select>
                <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                  ₹{finalPrice}/-
                </div>
              </div>
              <hr></hr>
              <button className={`btn btn-warning justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
              {/* <button className={`btn btn-danger justify-center ms-2 ${btnEnable ? "" : "disabled"}`} onClick={handleRemoveCart}>Remove</button> */}
            </div>
          </div>
        </div>
      )
}



