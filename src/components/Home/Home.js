import React, { Component } from 'react';
import Navigationbar from './Navigation/Navigationbar'
import Selling from '../Products/Selling';
import Products from '../Products/Products';
import './home.css'

const styles={
    minWidth: '300px'
}

const squareWhite ={
    flexGrow: 1,
    width:'100%',
    height: 'auto',
    backgroundColor: '#ffff',
    border:'1px solid #e6e6e6',
    marginRight: '5px',
    
    
}

const squareGray = {
    flexGrow: 1,
    width:'100%',
    height: 'auto',
    backgroundColor: '#e6e6e6',
    border:'1px solid #e6e6e6',
    marginRight: '5px',
   
    
}

class Home extends Component {
    render() {
        return (
            <div >
            <div style={styles}>            
                    <Navigationbar/>
                <div style={squareWhite}> 
                    <div className="containerTitle">
                        <h2 className="Titleright">
                            <span className="titleName">Conoce Left Lovers</span>
                        </h2>
                    <span className="linktoTitle">Ver más</span> 
                    <div className="carrouselArrow">

                    </div>
                    </div>
                </div>
                <div style={squareWhite}>
                
                <div className="containerTitle">
                    <h2 className="Titleright">
                        <span className="titleName">Reciente</span>
                    </h2>
                    <span className="linktoTitle">Ver más</span>
                </div>
                                
                    <Products/>
                </div> 
                <div className="Grids">
                
                </div>    
                <div style={squareGray}>
                <div className="containerTitle"></div>
                    <h2 className="Titleright">
                        <span className="titleName">Lo más comprado</span>
                    </h2>
                    <span className="linktoTitle">Ver más</span> 
                </div>
                    <Products/>
                </div> 
                <div style={squareWhite}>
                <div className="containerTitle">
                    <h2 className="Titleright">
                        <span className="titleName">Promociones del día</span>
                    </h2>
                    <span className="linktoTitle">Ver más</span> 
                </div>
                    <Products/>
                </div>
                <div style={squareGray}>
                <div className="containerTitle">
                    <h2 className="Titleright">
                        <span className="titleName">Arma tu lista de compras</span>
                    </h2>
                    <span className="linktoTitle">Ver más</span>
                </div>
                    <Products/>
                </div> 
                <div style={squareWhite}>
                <div className="containerTitle">
                    <h2 className="Titleright">
                        <span className="titleName">Tiendas y Autoservicios</span>
                    </h2>
                    <span className="linktoTitle">Ver más</span>
                </div>
                    <Products/>
                </div>                        
            </div>
           
        );
    }
}

export default Home;