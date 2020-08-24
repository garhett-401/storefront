
import React from 'react';
import { Paper, Container, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './header.js'
import { connect } from 'react-redux';

const Header = props => {
  let { cart } = props;
  return (
    <Paper elementType="div" id="header" elevation={2}>
      <Container elementType="section">
        <Typography variant="h3" component="h1" gutterBottom>Stuff & More Stuff</Typography>
      </Container>
      <Container className='cartHead'>
        <Typography paragraph>CART ({cart.length})</Typography>
        <ShoppingCartIcon />
      </Container>
    </Paper>
  )

}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}
export default connect(
  mapStateToProps, null
)(Header);