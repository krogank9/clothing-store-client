import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import ViewReviewsPage from './ViewReviewsPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`ViewReviewsPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <ViewReviewsPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ViewItemPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <ViewReviewsPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})