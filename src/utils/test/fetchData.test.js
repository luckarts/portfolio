import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';

import fetchData from '../fetchData';

jest.mock('axios');
const useApiMock = {
  status: 200,
  data: [{ title: 'Hello' }, { title: 'World' }]
};

it('initial and success state', async () => {
  const onSubmit = jest.fn(() => useApiMock.data);
  axios.get.mockResolvedValue(useApiMock);
  const { result, waitForNextUpdate } = renderHook(() => fetchData(onSubmit));

  expect(result.current).toMatchObject({
    data: [],
    error: null,
    loading: true
  });
  await waitForNextUpdate();
  expect(result.current).toMatchObject({
    data: useApiMock.data,
    error: null,
    loading: true
  });
});

it('get error', async () => {
  const errorMessage = 'Network Error 404';
  const onSubmit = axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
  const { result, waitForNextUpdate } = renderHook(() => fetchData(onSubmit));

  expect(result.current).toMatchObject({
    data: [],
    error: null,
    loading: true
  });
  await waitForNextUpdate();
  expect(result.current).toMatchObject({
    data: [],
    error: new Error(errorMessage),
    loading: true
  });
});
