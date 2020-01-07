import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Review from './Review';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Review component`, () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <table><tbody>
          <Review />
        </tbody></table>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('renders Review', () => {
    const wrapper = shallow(
      <BrowserRouter>
        <table><tbody>
          <Review />
        </tbody></table>
      </BrowserRouter>
    )
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})