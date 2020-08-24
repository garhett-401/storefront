import React from 'react';
import { connect } from 'react-redux';

const CheckoutCart = props => {
  let { cart } = props;
  return (
    <h1>Buy this Stuff!</h1>
  )
}


const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutCart);