import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from "react-router-dom";
import ViewProductPage from './ViewProductPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/products/brown-shirt.1"]} >
      <Route path="/products/:productName" component={ViewProductPage} ></Route>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
