import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CheckoutPageFake from './CheckoutPageFake';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`CheckoutPageFake component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <CheckoutPageFake />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders CheckoutPageFake', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <CheckoutPageFake />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})