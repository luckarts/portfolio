import React from 'react';
import { render, screen, fireEvent } from 'utils/testReduxWrapper';
import { waitFor } from '@testing-library/react';
import { ResumePage } from 'components/pages';
import { Route } from 'react-router-dom';
import fetchData from 'utils/fetchData';
import { initialState } from 'store/initialState';

const experiencesData = {
  data: {
    listExperiences: [
      {
        id: 1,
        fonction: 'test fonction',
        company: 'test company',
        link: 'https://www.test.com/'
      },
      {
        id: 2,
        fonction: 'test fonction',
        company: 'test company1',
        link: 'https://www.test.com/',
        list_experience: [
          {
            description: 'list_experience'
          }
        ]
      }
    ]
  }
};
const userData = {
  data: {
    user: {
      description: 'test User',
      cv: 'test1.pdf'
    }
  }
};

jest.mock('utils/fetchData');

it('should render a <Projets> component with loading component ', async () => {
  fetchData.mockReturnValue(experiencesData);

  const route = '/luc_bachelerie';
  const { getByText } = render(<Route exact path="/luc_bachelerie" component={ResumePage} />, initialState, { route });
  expect(getByText('test company'));
  expect(getByText('list_experience'));

  fetchData.mockReturnValue(userData);
  const render2 = render(<Route exact path="/luc_bachelerie" component={ResumePage} />, initialState, { route });
  //await waitForElement(() => render2.getByText('test User'));
  expect(render2.getByText('test User'));
});
