import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';

import { Home } from 'components/pages';
import { Route } from 'react-router-dom';
import { initialState } from 'store/initialState';

it('should render a <Projets> component with loading component ', async () => {
  const route = '/';
  const { getByText, getByTestId } = render(<Route exact path="/" component={Home} />, initialState, { route });
  expect(getByText('Développeur Fullstack Js'));
  expect(getByTestId('loading'));
});
