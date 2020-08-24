import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import ProjectForm from '../ProjectForm';
import 'mutationobserver-shim';
afterEach(() => {
  jest.clearAllMocks();
});
const initialState = {
  title: 'testProject',
  description: 'description',
  techno: 'techno',
  linkCode: 'https://'
};
const mockLogin = jest.fn();

/* const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
}); */

const fakePost = {
  title: 'changePost',
  description: 'changePost'
};

describe('App', () => {
  beforeEach(() => {
    render(<ProjectForm onSubmit={mockLogin} initialState={initialState} />);
  });
  it('renders Form without crashing', async () => {
    screen.getByLabelText(/title/i).value = fakePost.title;
    screen.getByLabelText(/description/i).value = fakePost.description;
    fireEvent.submit(screen.getByRole('button'));
    // await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(1));
    // expect(mockLogin).toHaveBeenCalledTimes(1);
  });
  it('should display error when title is empty', async () => {
    screen.getByLabelText(/title/i).value = '';
    expect(screen.getByRole('button'));
    fireEvent.submit(screen.getByRole('button'));
    await waitFor(() => expect(screen.getByText(/require/i)));
    expect(mockLogin).not.toBeCalled();
  });
});
