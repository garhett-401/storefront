import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { List, ListItem, Button } from '@material-ui/core';

import { filter, getProducts } from '../../store/products.js';
import { addItem } from '../../store/cart.js'


const If = (props) => {
  return props.condition ? props.children : null
}

const Products = props => {
  let {categories, products} = props

  useEffect(() => {
    props.getProducts();
  }, []);

  function addToCart(product) {
    props.addItem(product)
  }

  return (

    <List>
      {products.map((product, idx) => {
  
        return (
          <If condition={product.category}>
            <ListItem key={idx}>Product: {product.name}</ListItem>
            <Button onClick={() => addToCart(product)}> Add to Cart</Button>
          </If>
  
        )
      })}

    </List>
  )
}




const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories,
    cart: state.cart,
  }
}

const mapDispatchToProps = { filter, getProducts, addItem };

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Products)