import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CartPage from './CartPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`CartPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CartPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})