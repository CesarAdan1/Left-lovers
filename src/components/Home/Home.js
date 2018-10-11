import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import Product from '../Profiles/Product';

const styles={
    minWidth: '300px'
}
class Home extends Component {
    render() {
        return (
            <div style={styles}>
               
               
               <Navbar></Navbar>
               
               <Products></Products> 
                             
               
            </div>
        );
    }
}

export default Home;