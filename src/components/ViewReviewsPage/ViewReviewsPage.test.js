import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from "react-router-dom";
import ViewReviewsPage from './ViewReviewsPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/products/brown-shirt.1/reviews"]} >
      <Route path="/products/:productName/reviews" component={ViewReviewsPage} ></Route>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
