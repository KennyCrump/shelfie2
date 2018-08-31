import React, {Component} from 'react';
import Product from '../Product/Product'



class Dashboard extends Component{
    // constructor(props){
    //     super(props)

    //     this.state={
    //         update: false
    //     }
    // }


    // componentWillReceiveProps(props){
    //     let {refresh} = this.props
    //     if(props.refresh !== refresh){
    //         axios.get('/api/post').then(res => {this.setState({ update: !update })})
    //     }
    // }


    render(){
        let {inventoryList} = this.props
        let displayInventory = inventoryList.map((item, index) => {
            console.log("Mapped Item: ", item)
           return <Product key={index} updateSelectedProduct={this.props.updateSelectedProduct} deleteItem={this.props.deleteItem} productID={item.product_id} name={item.name} price={item.price} image={item.image_url} />
        })
        return(
            <div className="dashboard"> Dashboard 
                {displayInventory}
            </div>
        )
    }
}

export default Dashboard 