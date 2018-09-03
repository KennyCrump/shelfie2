import React, {Component} from 'react';
import Product from '../Product/Product'
import axios from 'axios'
import {Link} from 'react-router-dom'



class Dashboard extends Component{
    constructor(props){
        super(props)

        this.state={
            inventoryList: []
        }
    }

    updateInventoryList = (val) => {
        this.setState({
          inventoryList: val
        })
    }

    componentDidMount() {
        axios.get('/api/inventory').then((results) => {
          this.updateInventoryList(results.data)
        })
      }

    deleteItem = (id) => {
        axios.delete(`/api/product/${id}`)
        .then(results => {
            console.log("Successfully Deleted Item")
            this.updateInventoryList(results.data)
        })
    }


    render(){
        // let {inventoryList} = this.props
        let displayInventory = this.state.inventoryList.map((item, index) => {
            console.log("Mapped Item: ", item)
           return <Product key={index} deleteItem={this.deleteItem} productID={item.product_id} name={item.name} price={item.price} image={item.image_url} />
        })
        return(
            <div className="dashboard"> Dashboard 
                {displayInventory}
            </div>
        )
    }
}

export default Dashboard 