import React, { Component } from 'react';
import Navbar from './Navbar';
import Navigationbar from './Navigationbar'
import Products from './Products';

const styles={
    minWidth: '300px'
}
class Home extends Component {
    render() {
        return (
            <div style={styles}>
                            
               <Navigationbar/>             
               <Products/>
                                          
            </div>
        );
    }
}

export default Home;