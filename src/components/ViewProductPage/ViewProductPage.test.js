import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ViewItemPage from './ViewItemPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`ViewItemPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ViewItemPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ViewItemPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ViewItemPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})