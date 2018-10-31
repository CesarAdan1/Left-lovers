import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Snackbar, Typography} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';
import request from 'superagent';
import { Redirect } from 'react-router-dom';
import './Enter.css';


const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block',   
    marginLeft: theme.spacing.unit * 6,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit*3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
 
  form: {
    
    width: '30%', 
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit*1,
    marginBottom: theme.spacing.unit,
    flex: 1
  },
  form1: {
    width:'30%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit
  },

  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

class Log extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();

    request
      .post('http://localhost:3001/api/v1/auth/signup')
      .set({
        'Content-Type': 'application/json'   
      })
       .send
       ({
        email: this.state.email,
        password: this.state.password
      
       })
      .then(response => {
        if (response.ok) {
          this.props.history.push('/ProfileVendor')
        }
      })
      .catch(error => console.error(error));
  }


  render(){
    console.log(this.state)
  const { classes } = this.props;

  const { redirectToReferrer } = this.state;
  const { from } = this.props.location.state || { from: { pathname: '/ProfileVendor' } }

  if (redirectToReferrer) {
    return (
      <Redirect to={ from } />
    )
  }

  return (
    <div className="separate">
       <div className="flex">
         
            <div className="child">
              
              
            </div>
            <div>
             <form className="child" onSubmit={this.onSubmit} className={classes.layout}>
             <Typography >Únete a nuestro equipo</Typography>
              <FormControl margin="normal" required fullWidth >
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input onChange={this.handleChange} id="email" name="email" autoComplete="email" autoFocus />
             
            </FormControl>
            <FormControl  className={classNames(classes.margin, classes.textField)} required fullWidth >
              <InputLabel htmlFor="adornment-password">Contraseña</InputLabel>
            <Input
              onChange={ this.handleChange }
              type="text"
        
            />
            
        </FormControl>
                                   
            <Button
              
              type="submit"
              fullWidth
              variant="raised"
              color="secondary"
              
              className={classes.submit}
            > 
              Crear Cuenta
            </Button>
                  
          </form>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={ this.state.onLoginError }
        autoHideDuration={ 2000 }
        onClose={ this.handleClose }
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Authentication failed</span>}
      />
  </div>
</div>
</div>
  );
            }
}


Log.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Log);
