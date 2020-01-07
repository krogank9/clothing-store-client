import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Favorite from './Favorite';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Favorite component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <table><tbody>
          <Favorite />
        </tbody></table>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders Favorite', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <table><tbody>
          <Favorite />
        </tbody></table>
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})