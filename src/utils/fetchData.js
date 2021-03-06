import { useState, useEffect } from 'react';

const useFetch = (callback, params) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setErrors] = useState(null);
  useEffect(() => {
    const fetchData = async function() {
      try {
        setLoading(true);
        const response = await callback(params);

        if (response) {
          setData(response);
        }
      } catch (error) {
        if (error.response && error.response.data.message) {
          setErrors(error.response.data.message);
        } else if (error.response && error.response.status) {
          setErrors(error.response.statusText);
        } else {
          setErrors(error);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [callback, params]);
  return { loading, data, error };
};

export default useFetch;
