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
                   <Link className="linkstylel"  to="/quees"><Button style={styles}><li className="form_element">¿Qué es?</li></Button></Link>
                   <Link className="linkstylel"  to="/como"><Button style={styles}><li className="form_element">¿Cómo Funciona?</li></Button></Link>
                   <Link className="linkstylel"  to="porque"><Button style={styles}><li className="form_element">¿Por qué?</li></Button></Link>
               </ul>
            </div>
        )
    }
}

export default Menuopt;