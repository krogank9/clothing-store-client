import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import CartItem from './CartItem';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`CartItem component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <table><tbody>
          <CartItem />
        </tbody></table>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the App', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <table><tbody>
          <CartItem />
        </tbody></table>
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})