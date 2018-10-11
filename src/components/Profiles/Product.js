import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button  from '@material-ui/core/Button';
import  {withStyles}  from '@material-ui/core/styles';
import { Typography, Input, FormControl, InputLabel } from '@material-ui/core';
import request from 'superagent';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    
    button: {
        width: '50px'
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing.unit,
      },
      form: {
        width: '100%', // Fix IE11 issue.
        marginTop: theme.spacing.unit*1,
        marginBottom: theme.spacing.unit*2,
      },
      button: {
        margin: theme.spacing.unit,
      },
      layout: {
        width: 'auto',
        display: 'block',
        minHeight:'50px',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
          width: 400,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      card: {
        maxWidth:800,   
        marginLeft: theme.spacing.unit*3 ,
        marginRight: theme.spacing.unit*3 ,
        marginBottom: theme.spacing.unit * 1,
      },
      media: {
        height: 0,
        paddingTop: '80%', // 16:9
      },
  });
  
  class Product extends Component {
   constructor() {
      super();

        this.state = {
         
          kind: '',
          food: '',
          lastprice: '',
          actualprice:'',
          saving:'',
          availability:'',
          user:''
          
          
      }
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    componentWillMount (){
      this.setState({
        user: localStorage.getItem('user_id')
      })
    }
    onSubmit = e =>{
      e.preventDefault();
    
    request
      .post('https://backendlefts.herokuapp.com/api/v1/data')
      .set({
        'Content-Type': 'application/json'
      })
      .send
        ({
        user: this.state.user,
        kind: this.state.kind,
        food: this.state.food,
        lastprice: this.state.lastprice,
        actualprice: this.state.actualprice,
        saving: this.state.saving,
        availability: this.state.availability       
      })
      .then(response => {
        if(response.ok) {
          this.props.history.push('/Profile')
        }
        })
        .catch(error => console.error(error));
      
      }

  render() {
    
      const{classes} = this.props; 
      console.log("user_id",this.state.user);     
   return (
     <div>
    
        <form className={classes.layout} onSubmit={ this.onSubmit }>
                
          <FormControl margin="normal" required fullWidth >
              <InputLabel >Tipo de Alimento</InputLabel>
               <Input onChange={this.handleChange} type="text"
               name="kind"  
                defaultValue={this.state.kind}
                autoFocus />         
          </FormControl>
          <FormControl margin="normal" required fullWidth >
              <InputLabel >Nombre del Platillo</InputLabel>
               <Input
               name="food" 
               defaultValue={this.state.food}
               onChange={this.handleChange} type="text"
              autoFocus />         
          </FormControl>
      <Typography>
      Se requiere esta información:
      </Typography>
      <FormControl margin="normal" required fullWidth >
              <InputLabel >Introduce precio anterior</InputLabel>
               <Input onChange={this.handleChange} 
               
               type="number" 
               name="lastprice"
              defaultValue={this.state.lastprice}
              autoFocus />         
          </FormControl>
          <FormControl margin="normal" required fullWidth >
              <InputLabel >Introduce precio actual</InputLabel>
               <Input onChange={this.handleChange} 
               type="number"
               
                defaultValue={this.state.actualprice}  
                name="actualprice"
              autoFocus />         
          </FormControl>
      
      <FormControl margin="normal" required fullWidth >
              <InputLabel >Ahorro</InputLabel>
               <Input onChange={this.handleChange} 
              defaultValue={this.state.saving}
              name="saving"
              
             autoFocus />         
          </FormControl>
        
          <FormControl margin="normal" required fullWidth >
              <InputLabel >Cantidad disponible</InputLabel>
               <Input onChange={this.handleChange} type="text" 
                defaultValue={this.state.availability}
                name="availability"
                autoFocus />         
          </FormControl>
        <Button type="submit" variant="contained" color="secondary" className={classes.button}>
            Subir y Continuar
        </Button>
        
  </form>
</div>
   )
  }
}

Product.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Product);