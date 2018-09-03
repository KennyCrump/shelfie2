import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

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
            <Link to={`/editItem/${props.productID}`}>
                <button>Edit</button>
            </Link>
            
        
        </div>
    )
}