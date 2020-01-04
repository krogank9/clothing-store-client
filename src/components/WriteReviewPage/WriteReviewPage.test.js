import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import WriteReviewPage from './WriteReviewPage';

import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`WriteReviewPage component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <WriteReviewPage />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders ViewItemPage', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <WriteReviewPage />
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})