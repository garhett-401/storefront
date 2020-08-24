import React from 'react';
import { List, ListItem, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { deleteItem } from '../../store/cart.js';

const SimpleCart = props => {
  let { cart } = props;

  function removeFromCart(item) {
    props.deleteItem(item);
  }

  return (
    <>
      <List>
        {cart.map((item, idx) => {
          return (
            <>
              <ListItem>{item.name}</ListItem>
              <Button onClick={() => removeFromCart(item)} startIcon={<DeleteIcon/>}>Remove</Button>
            </>
          )
        })}
      </List>
    </>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

const mapDispatchToProps = { deleteItem };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCart);