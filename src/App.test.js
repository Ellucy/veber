import React from 'react';
import ReactDOM from 'react-dom';
import OnePage from './OnePage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OnePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
