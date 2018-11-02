import React, { Component } from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './menuopt.css';


const styles = {
    textTransform: 'none',
}

class Menuopt extends Component{
    render(){
        return(
            <div >

               <ul className="form">
                   <Link className="linkstylel"  to="/quees"><li className="form_element">¿Qué es?</li></Link>
                   <Link className="linkstylel"  to="/como"><li className="form_element">¿Cómo Funciona?</li></Link>
                   <Link className="linkstylel"  to="porque"><li className="form_element">¿Por qué?</li></Link>
               </ul>
            </div>
        )
    }
}

export default Menuopt;