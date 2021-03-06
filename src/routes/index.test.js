import React from 'react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routes from 'routes';
import { Route } from 'react-router-dom';
const callback = jest.fn();
import { render, screen, fireEvent, cleanup, act } from 'utils/testReduxWrapper';
import { initialState } from 'store/initialState';
const LocationDisplay = ({ location }) => <div>{location.pathname}</div>;
import 'mutationobserver-shim';
afterEach(() => {
  jest.clearAllMocks();
});
afterEach(cleanup);
describe('Routes', () => {
  it('navigation', async () => {
    const route = '/';
    render(<Routes />, initialState, { route });
    fireEvent.click(screen.getByText('Développeur Fullstack Js'));

    await waitFor(() => screen.getByText('Mes projets'));

    await waitFor(() => screen.getByText('Not Found'));
    //   fireEvent.click(screen.getByText('À propos'));
    //  await waitFor(() => screen.getByText('À propos', { selector: 'h1' }));
  });

  it('landing on a About page', () => {
    const route = '/luc_bachelerie';
    render(<Routes />, initialState, { route });
    expect(screen.getAllByText('À propos'));
  });
  it('landing on a bad page', () => {
    const route = '/notFound';
    render(<Routes />, initialState, { route });
    expect(screen.getByText('404 !'));
  });
  test('rendering a component that uses withRouter', () => {
    const route = '/test-route';
    render(<Route exact path="/test-route" component={LocationDisplay} />, initialState, { route });
    expect(screen.getByText('/test-route'));
  });
});
