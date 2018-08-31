import React, {Component} from 'react';
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            imageInput: '',
            productName: '',
            price: 0,
            selectedProduct: null
        }
        this.updateImageInput = this.updateImageInput.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.selectedProduct !== prevProps.selectedProduct){
            let {selectedProduct, inventoryList} = this.props
            let inventoryIndex = null
            inventoryList.forEach((item, index) =>{
                if(item.product_id === selectedProduct){
                    inventoryIndex = index
                }
            })
            this.setState({
                imageInput: inventoryList[inventoryIndex].image_url,
                productName: inventoryList[inventoryIndex].name,
                price: inventoryList[inventoryIndex].price,
                selectedProduct: selectedProduct
            })
        } 
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
            selectedProduct: null
        })
    }

    createItem= () => {
        let {imageInput: image, productName: name, price } = this.state
            this.props.createItem({image, name, price: +price})
            this.resetValues()
    }
    saveEditItem = () => {
        let {imageInput: image, productName: name, price, selectedProduct } = this.state
        this.props.editItem({image, name, price: +price}, selectedProduct) 
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
           <button onClick={this.state.selectedProduct === null ? this.createItem : this.saveEditItem}> {this.state.selectedProduct === null ? "Add To Inventory" : "Save"}</button>
           </div>
        )
    }
}

export default Form 