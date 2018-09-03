import React from 'react';
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'

const Home = () => {
    return(
        <Router>
            <Header />
            <Dashboard />
        </Router>
    )
}
export default Home