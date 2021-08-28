import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './header'
import Link from 'next/link';
import { HomeW } from '../styleW/HomeW';


const styles = {
  list: {
    width: 250,
    color: "black"
  },
  fullList: {
    width: 'auto',
  },
};

const StyledLink= withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'green',
    height: 48,
    padding: '0 10px',
    width:'150px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Link);


class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {[<StyledLink href="/" >Home </StyledLink>, <Link href="/meal">Meal </Link>, <Link href="/drink">Drink</Link>, <Link href="/desert">Desert</Link>].map((text, index) => (
            <ListItem button key={text}>
            <ListItemText primary={text} />
             
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );

    return (
      <HomeW>
        <Button onClick={this.toggleDrawer('left', true)} className="text-light">Dashboard</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </HomeW>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);