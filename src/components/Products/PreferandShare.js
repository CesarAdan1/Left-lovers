import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    actions: {
      display: 'flex',
    },
  });
  
class PreferandShare extends Component {
    constructor(props) {
        super();
        this.state = {
          likes: props.l,
          liked: false,
          
        };
      }

  incrementLikes = (e) => {
    e.preventDefault();

    if (this.state.liked === false) {
      this.setState({
        likes: parseInt(this.state.likes) + 1,
        liked: true
      });
    } else {
      this.setState({
        likes: parseInt(this.state.likes) - 1,
        liked: false
      });
    }
  }
 
    render(){
        const { classes } = this.props;
        return(
            <div>
               <CardActions className={classes.actions} disableActionSpacing>          
                    <IconButton className={ (this.state.liked === true) ? 'liked' : ''}
                        onClick={ this.incrementLikes }  aria-label="Add to favorites">
                        <FavoriteIcon onClick={ this.state.likes }/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>
                    <Button paragraph variant="body2">
                        Más sobre este usuario
                  </Button>                
                </CardActions>  
            </div>
        )
    }
}

PreferandShare.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PreferandShare);