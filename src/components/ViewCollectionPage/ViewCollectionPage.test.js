import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ViewCollectionPage from './ViewCollectionPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`ViewCollectionPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ViewCollectionPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ViewCollectionPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ViewCollectionPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})