import React, { Component } from 'react';

import './App.css';
import axios from 'axios'

import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
// import Product from './Components/Product/Product'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      inventoryList: [],
      selectedProduct: null,
      updateToggle: false
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
  createItem = (newItem) => {
    axios.post('/api/product', newItem).then(results => {
      this.updateInventoryList(results.data)
    })
  }

  editItem =(edittedItem, selectedProduct) => {
    axios.put(`/api/product/${selectedProduct}`, edittedItem)
    .then(results => {
      this.updateInventoryList(results.data)
    })

  }
  updateSelectedProduct = (id) => {
    this.setState({
      selectedProduct: id
    })
  }

  render() {
    console.log("App State: ", this.state)
    return (
      <div className="App">
        <Header id="header"/>
        <Dashboard id="dashboard"
        inventoryList={this.state.inventoryList}
        deleteItem={this.deleteItem}
        updateSelectedProduct={this.updateSelectedProduct}/>
        <Form id="form" 
        inventoryList={this.state.inventoryList} 
        selectedProduct={this.state.selectedProduct}
        createItem={this.createItem}
        editItem={this.editItem}/>
        {/* <Product /> */}
      </div>
    );
  }
}
export default App;
