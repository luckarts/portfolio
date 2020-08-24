import '@testing-library/jest-dom';
import { waitFor } from '@testing-library/react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import React from 'react';
import LoginForm from 'components/shared/Form/UserForm';
import { initialState as reduxState } from 'store/initialState';
import 'mutationobserver-shim';
afterEach(() => {
  jest.clearAllMocks();
});
const initialState = {
  description: '',
  cv: []
};
const mockLogin = jest.fn();

/* const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
}); */
const fakePost = {
  description: 'description'
};

describe('App', () => {
  beforeEach(() => {
    const route = '/login';
    render(<LoginForm onSubmit={mockLogin} initialState={initialState} />, reduxState);
  });
  it('renders Form without crashing', async () => {
    screen.getByLabelText(/description/i).value = fakePost.description;
    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    //expect(mockLogin).toHaveBeenCalledTimes(1);
  });
  it('should display error when title is empty', async () => {
    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText(/require/i)));
    expect(mockLogin).not.toBeCalled();
  });
});
