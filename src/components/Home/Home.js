import React, { Component } from 'react';
import Navigationbar from './Navigationbar'
import Popular from '../Products/Popular'
import Selling from '../Products/Selling';
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
               <Popular/>
               <Selling /> 
                                          
            </div>
        );
    }
}

export default Home;