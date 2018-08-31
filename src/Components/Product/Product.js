import React from 'react'
import './Product.css'

export default function Product(props){
    return(

        <div>
           <div>
               Product: {props.name}   
            </div> 
            <div>
            Price : ${props.price}
            </div>
            <img className="productImage" src={props.image} alt={props.name}/>
            <button onClick={() => props.deleteItem(props.productID)}>Delete</button>
            <button onClick={() => props.updateSelectedProduct(props.productID)}>Edit</button>
            
        
        </div>
    )
}