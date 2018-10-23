import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import people from '../../../images/people.jpg'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
});

class Consumer extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={people}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography component="p">
            Eres un vendedor de alimentos en establecimiento de comida, productos de consumo,
            productor o vendedor de frutas y verduras, carnes, cualquier tipo de alimentos en tianguis,
            mercados, supermercados.
          </Typography>
          <Typography component="p">
            Podrás comprar productos como comida, etc. a un menor precio ofrecido en establecimientos. Verás ofertas
            de empresas, tiendas, tianguis de comida, etc. 
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

Consumer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Consumer);
