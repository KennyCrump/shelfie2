import React from 'react'
import {Link} from 'react-router-dom'

export default function Header(){
    return(

        <div className="header">Header
            <Link to="/"><button className="headerButton">Dashboard</button></Link>
            <Link to="/newItem"><button className="headerButton">Add Inventory</button></Link>
        </div>
    )
}