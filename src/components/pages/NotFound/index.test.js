import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import { waitFor } from '@testing-library/react';
import { NotFound } from 'components/pages';
import { Route } from 'react-router-dom';
import { initialState } from 'store/initialState';

it('should render a <Projets> component with loading component ', async () => {
  const route = '/test';
  const { getByText } = render(<Route exact path="/test" component={NotFound} />, initialState, { route });
  expect(getByText('404 !'));
});
