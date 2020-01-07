import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Collection from './Collection';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Collection component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Collection />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders Collection', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Collection />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})