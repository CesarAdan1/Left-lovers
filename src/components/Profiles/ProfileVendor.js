import React, { Component } from 'react';
import {
    TextField,
    Button
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import PlacesAutocomplete , {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';
import request from 'superagent';

const styles = theme =>({  
   button:{
    marginLeft: theme.spacing.unit*50,
    marginBottom: theme.spacing.unit*23,
   },
   layout: {
    width: 'auto',
    display: 'block',
    marginTop: theme.spacing.unit*7,
    marginBottom: theme.spacing.unit*24,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
   input:{
       display: 'none'
   } ,
   iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: red[800],
    },
   },
   center: {
     paddingLeft: theme.spacing.unit*17.5,
     width: '40px'
   }
})
//API_KEY='AIzaSyANau1WWEEViblayqswU5yHFjGamfxsaR8'

class ProfileVendor extends Component{
     constructor(props) {
       super(props);
         this.state = { address: '', 
         googledata:[],
         placelocation:'',
         nameplace:'',
         telefono:'',
         redirectToReferrer: false,
         onProfile: false,
         email:'',
         user:''
         
        } 
          
       }
       
       handleChanged = e => {
         this.setState({
           [e.target.name]:e.target.value
         })
       }

        handleChange = address => {
         this.setState({ address
        
        });
         
        };
         
        componentWillMount (){
          this.setState({
            user: localStorage.getItem('user_id')
          })
        }

      onSubmit = e => {
        e.preventDefault();

        request
          .post('https://backendlefts.herokuapp.com/api/v1/googledata')
          .set({
            'Content-Type': 'application/json'   
          })
           .send
          ({
            user: this.state.user,
            placelocation: this.state.address,
            nameplace: this.state.nameplace,
            telefono: this.state.telefono,        
          })
          .then(response=>{
            if (response.ok) {
              this.props.history.push('/Enter')
              
            }})                   
            .catch(error =>console.log(error));
            
          }
      
        handleSelect = address => {
         geocodeByAddress(address)
           .then(results => getLatLng(results[0]))
           .then(latLng => console.log('Success', latLng))
           .catch(error => console.error('Error', error));
       };
   
    render() {
        const { classes } = this.props;
        console.log("user_id",this.state.user);     
        return (

            <div > 
              <TextField>Ingresa la siguiente información para completar tu perfíl</TextField>           
               <form className={classes.layout} onSubmit={this.onSubmit}>
               
               <MenuItem className={classes.center}>
                
                    <IconButton variant="contained" color="inherit"><AccountCircle />
                    </IconButton>
                                      
                </MenuItem> 
                  
                  <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
              <div>
                <TextField
                   required
                   defaultValue={this.state.placelocation}
                   onChange={this.handleChanged}
                    {...getInputProps({
                    label: 'Busca tu ubicación ...',
                    className: 'location-search-input',
                    name:"placelocation"
                  })}                  
                   fullWidth
                   />
          
                <div >
                  {loading && <div>Buscando...</div>}
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        </PlacesAutocomplete>
                <TextField
                defaultValue={this.state.nameplace}
                  onChange={this.handleChanged}
                   required
                   name="nameplace"
                   label="Nombre del Lugar"
                   fullWidth
                   />
                   
                   <TextField
                   defaultValue={this.state.telefono}
                   onChange={this.handleChanged}
                    required
                    name="telefono"
                    label="Teléfono de Contacto"
                    fullWidth
                   /> 
                                       
                    <Button variant="contained"color="secondary" type='submit'>
                    Completar información y Empezar a Ayudar
                    </Button>
                    <Icon  className={classes.iconHover} color="disabled" fontSize="large">                    
                    </Icon>
       
                </form>                    
               
            </div>
            
            // ))}
        );
    }
}

ProfileVendor.propTypes = {
    classes: PropTypes.object.isRequired,
  }

export default withStyles(styles)(ProfileVendor);