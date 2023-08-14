import '../product.css'

import { useState } from 'react'
import Cart from './cart';


function Product({name,amt,image,price}){

    const[quantity,setQuantity]=useState(0);
    const decrement = () =>{
        if(quantity>0){
            setQuantity(prevCount=>prevCount-1);
        }
    }
    const increment = () =>{
        if(quantity<5){
            setQuantity(prevCount=>prevCount+1);
        }
    }
    return(
            <div className='product'>
                <div className='box'>
                    <img id='name' src={image}></img>
                    <div className='textbox'>
                        <label id='text'>{name}</label>
                        <div className='amt-price'>
                            <label id='amt'>{amt}</label>
                            <label id='price'>₹{price}</label>
                        </div>
                        <div id='qty'>
                        <label >QTY:</label>
                        <button class="minus" onClick={decrement}>-</button>{quantity}
                        <button class="plus" onClick={increment}>+</button>
                        </div>
                        <button id='add'>ADD</button>
                    </div>
                </div>
            </div>
        )
}
export default Product;
    