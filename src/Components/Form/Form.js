import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            imageInput: '',
            productName: '',
            price: 0,
            product_id: null
        }
        this.updateImageInput = this.updateImageInput.bind(this)
    }
    createItem = (newItem) => {
        axios.post('/api/product', newItem).then(results => {
          console.log('Item added from Form')
        })
    }
    
    componentDidMount(){
        if(this.props.match.path !== '/newItem'){
            console.log("Match: ", this.props.match)
            axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
                console.log(res.data)
                let {image_url: image, name, price, product_id} = res.data[0]
                this.setState({
                    imageInput: image,
                    productName: name,
                    price: price,
                    id: product_id
                })
            })
        }
    }




    componentDidUpdate(prevProps){
        if(prevProps.match.params.id !== this.props.match.params.id){
            this.resetValues();
        }

        // if(this.props.selectedProduct !== prevProps.selectedProduct){
        //     let {selectedProduct, inventoryList} = this.props
        //     let inventoryIndex = null
        //     inventoryList.forEach((item, index) =>{
        //         if(item.product_id === selectedProduct){
        //             inventoryIndex = index
        //         }
        //     })
        //     this.setState({
        //         imageInput: inventoryList[inventoryIndex].image_url,
        //         productName: inventoryList[inventoryIndex].name,
        //         price: inventoryList[inventoryIndex].price,
        //         selectedProduct: selectedProduct
        //     })
        // } 
    }


    updateImageInput = (val) => {
        this.setState({imageInput: val}, console.log(val))
    }
    updateProductName = (val) => {
        this.setState({productName: val}, console.log(val))
      }
    updatePrice = (val) => {
        this.setState({price: val}, console.log(val))
    }
    resetValues = () => {
        this.setState({
            imageInput: '',
            productName: '',
            price: 0, 
            product_id: null
        })
    }

    createItem= () => {
        let {imageInput: image, productName: name, price } = this.state
            this.props.createItem({image, name, price: +price})
            this.resetValues()
    }
    saveEditItem = () => {
        let {imageInput: image, productName: name, price, id } = this.state
        axios.put(`/api/product/${id}`, {image, name, price: +price})
        .then(() => console.log("Item updated"))
        this.resetValues() 
    }
    

    render(){
        console.log("Form State: ", this.state)
        console.log("Form Props: ", this.props)
        return(
           <div className="form"> 
            <div>
               <img src={this.state.imageInput === '' ? 'https://via.placeholder.com/100x100' : this.state.imageInput} alt=""/>
            </div> 
            <input value={this.state.imageInput} placeholder="Add Image URL here" onChange={(e) => this.updateImageInput(e.target.value)} type="text"/>
            <br/>
            <input value={this.state.productName} placeholder="Enter Product Name" onChange={(e) => this.updateProductName(e.target.value)} type="text"/>
            <br/>
            <input value={this.state.price === 0 ? '' : this.state.price} placeholder="Enter Price Here" onChange={(e) => this.updatePrice(e.target.value)} type="text"/>
            <br/>
            <button onClick={this.resetValues}>Cancel</button>
            <Link to='/'>
                <button onClick={this.state.id === null ? this.createItem : this.saveEditItem}> {this.state.id === null ? "Add To Inventory" : "Save"}</button>
            </Link>
            </div>
        )
    }
}

export default Form 