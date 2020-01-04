import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import StarRatingInput from './StarRatingInput';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`StarRatingInput component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <StarRatingInput />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders StarRatingInput', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <StarRatingInput />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})