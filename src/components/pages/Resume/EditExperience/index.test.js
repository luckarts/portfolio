import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import ExperienceForm from '../ExperienceForm';
import 'mutationobserver-shim';

afterEach(() => {
  jest.clearAllMocks();
});
const initialState = {
  date: '2019',
  fonction: 'developpeur',
  company: 'company'
};

/* const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
}); */

const fakePost = {
  date: '2020',
  description: 'changePost'
};

describe('App', () => {
  const mockLogin = jest.fn();

  beforeEach(() => {
    render(<ExperienceForm onSubmit={mockLogin} initialState={initialState} />);
  });

  it('renders Form without crashing', async () => {
    screen.getByLabelText(/date/i).value = '2020';
    screen.getByRole('button', { name: 'Valider' });
    fireEvent.submit(screen.getByRole('button', { name: 'Valider' }));
    await waitFor(() => expect(mockLogin).toHaveBeenCalledTimes(0));
  });
  it('should display error when title is empty', async () => {
    screen.getByLabelText(/date/i).value = '';
    fireEvent.submit(screen.getByRole('button', { name: 'Valider' }));
    await waitFor(() => expect(screen.getByText(/require/i)));
    expect(mockLogin).not.toBeCalled();
  });
});
