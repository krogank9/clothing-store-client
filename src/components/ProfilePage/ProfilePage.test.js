import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CartPage from './CartPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`ProfilePage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ProfilePage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})