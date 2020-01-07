import React from 'react';
import ReactDOM from 'react-dom';
import { Route, MemoryRouter } from "react-router-dom";
import ViewCollectionPage from './ViewCollectionPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter initialEntries={["/collections/shirts.1"]} >
      <Route path="/collections/:collectionName" component={ViewCollectionPage} ></Route>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
