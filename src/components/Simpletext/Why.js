import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import theproblem from '../../images/theproblem.jpg'
import './Why.css';

class Why extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="body">
                <img src={theproblem} className="imt" />
            </div>
        );
    }
}

Why.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Why;