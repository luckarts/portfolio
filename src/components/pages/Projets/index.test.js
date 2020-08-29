import React from 'react';
import { render, screen, fireEvent, cleanup, act } from 'utils/testReduxWrapper';
import { waitFor } from '@testing-library/react';
import { Projets } from 'components/pages';

import fetchData from 'utils/fetchData';
const data = {
  projects: [
    {
      id: 1,
      img: '/img/bgproject.jpg',
      title: 'Portfolio',
      description:
        'Des projets pleins la tête.\n    Je cherche continuellement à améliorer la qualité de mon code.<br>\n    Je continue à se former en permanence, à aller toujours plus loin .',
      techno: ' React / Redux / Nodejs / TDD ',
      linkCode: 'https://github.com/luckarts/portfolio',
      linkWebsite: 'tesst'
    }
  ]
};

jest.mock('utils/fetchData');

it('should render a <Projets> component with loading component ', async () => {
  fetchData.mockReturnValue({ loading: true });
  const initialState = { tabs: { current_tabs: 1 } };
  const { getByTestId } = render(<Projets />, initialState);
  expect(getByTestId('loading'));
});

it('should render a <Projets> component ', async () => {
  fetchData.mockReturnValue({ data });
  const initialState = { tabs: { current_tabs: 1 } };
  const { getByTestId } = render(<Projets />, initialState);

  expect(getByTestId('cardProjet'));
});

it('should render a <Projets> component with loading component ', async () => {
  fetchData.mockReturnValue({ error: '404' });
  const initialState = { tabs: { current_tabs: 1 } };
  const { getByText } = render(<Projets />, initialState);
  expect(getByText('404'));
});
