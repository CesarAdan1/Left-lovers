import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import compose from 'recompose/compose';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth'
import Mobilestepper from './Mobilestepper';
import SearchAppBar from '../Header/Searchbar';

const styles = theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: '35%',
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 300,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '100%',
  },
  
});

const stylese = {
  color: '#48B2AB'
}

class Navigationbar extends Component {
  render() {
    const { classes} = this.props;
    return (
    <React.Fragment>
      <Hidden only={['md', 'lg', 'sm', 'xl']}>
        <SearchAppBar/>
      </Hidden>
      <Mobilestepper/>
      </React.Fragment>
    );
  }
}

Navigationbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withWidth(),
)(Navigationbar);

