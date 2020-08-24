import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import SimpleCart from './components/cart/simplecart.js'
import Cart from './components/cart/checkout.js'

// Setting up our global state!
import { Provider } from 'react-redux';

import store from './store';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <Header />
          <BrowserRouter>
            <Route exact path='/'>
              <Categories />
              <Products />
              <SimpleCart />
            </Route>

            <Route exact='/checkout'>
              <Cart />
            </Route>
          </BrowserRouter>
          <Footer />
        </Provider>
      </>
    )
  }
}
