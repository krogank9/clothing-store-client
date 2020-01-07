import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import HeroSlider from './HeroSlider';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`HeroSlider component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><HeroSlider /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the HeroSlider', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <HeroSlider />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
