import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ListCollectionsPage from './ListCollectionsPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`ListCollectionsPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ListCollectionsPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ProfilePage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ListCollectionsPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})