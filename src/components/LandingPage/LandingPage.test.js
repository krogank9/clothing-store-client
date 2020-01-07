import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import LandingPage from './LandingPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`LandingPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter><LandingPage /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders the LandingPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
