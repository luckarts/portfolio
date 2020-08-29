import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';

import postData from '../postData';

jest.mock('axios');
const useApiMock = {
  status: 200,
  data: [{ title: 'Hello' }, { title: 'World' }]
};

it('initial and success state', async () => {
  const onSubmit = jest.fn(() => useApiMock.data);
  axios.post.mockResolvedValue(useApiMock);
  const { result, waitForNextUpdate } = renderHook(() => postData(onSubmit, true, useApiMock.data));

  expect(result.current).toMatchObject({
    data: [],
    error: null,
    loading: true
  });
  await waitForNextUpdate();
  expect(result.current).toMatchObject({
    data: useApiMock.data,
    error: null,
    loading: false
  });
});

it('get error', async () => {
  const errorMessage = 'Network Error 404';
  const onSubmit = axios.post.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
  const { result, waitForNextUpdate } = renderHook(() => postData(onSubmit, true, useApiMock.data));

  expect(result.current).toMatchObject({
    data: [],
    error: null,
    loading: true
  });
  await waitForNextUpdate();
  expect(result.current).toMatchObject({
    data: [],
    error: new Error(errorMessage),
    loading: false
  });
});
