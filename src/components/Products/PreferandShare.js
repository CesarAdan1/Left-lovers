import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core';

const styles = theme => ({
    actions: {
      display: 'flex',
    },
      badge: {
        top: 1,
        right: -15,
        // The border color match the background color.
        border: `2px solid ${
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[900]
        }`,
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
                    <IconButton className={ (this.state.liked === true) ? 'liked' : ''}
                        onClick={ this.incrementLikes }  aria-label="Add to favorites">
                        <FavoriteIcon onClick={ this.state.likes }/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon />
                    </IconButton>               
                    <IconButton  aria-label="Cart">
                        <Badge badgeContent={0}  classes={{ badge: classes.badge }} color="default">
                            <ShoppingCartIcon color="default"/>
                        </Badge>
                    </IconButton> 
            </div>
        )
    }
}

PreferandShare.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(PreferandShare);