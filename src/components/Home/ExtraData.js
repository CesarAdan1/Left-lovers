import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import './databar.css'

class ExtraData extends Component {
    render() {
        return (
            <div className="databar">
              <Button>Filtrar por</Button>  
            </div>
        );
    }
}


export default ExtraData;