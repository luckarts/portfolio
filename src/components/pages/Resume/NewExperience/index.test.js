import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import React from 'react';
import ExperienceForm from '../ExperienceForm';
import 'mutationobserver-shim';

afterEach(() => {
  jest.clearAllMocks();
});
afterEach(cleanup);
const initialState = {
  experience: { year: null },
  date: null,
  fonction: null,
  company: null,
  link: null,
  list_experience: [{ description: null, id: null }]
};
const mockLogin = jest.fn();

/* const mockLogin = jest.fn((email, password) => {
  return Promise.resolve({ email, password });
}); */

const fakePost = {
  experience: { year: '2019' },
  date: '2020',
  fonction: 'developpeur',
  company: 'company',
  list_experience: [{ description: 'description', id: 1 }]
};

describe('App', () => {
  beforeEach(() => {
    render(<ExperienceForm onSubmit={mockLogin} initialState={initialState} />);
  });
  it('renders Form without crashing', async () => {
    screen.getByLabelText(/date/i).value = fakePost.date;
    screen.getByLabelText(/fonction/i).value = fakePost.fonction;
    screen.getByLabelText(/societé/i).value = fakePost.company;
    //screen.getByRole('button', { name: 'Valider' });
    fireEvent.submit(screen.getByRole('button', { name: 'Valider' }));
    // expect(mockLogin).toHaveBeenCalledTimes(1);
  });
  it('should display error when title is empty', async () => {
    fireEvent.submit(screen.getByText('Valider'));
    await waitFor(() => expect(screen.getAllByText(/require/i)));
    expect(mockLogin).not.toBeCalled();
  });
});
