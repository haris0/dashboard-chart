import axios from 'axios';
import { useState, useEffect } from 'react';

const baseURL = 'https://ae1cdb19-2532-46fa-9b8f-cce01702bb1e.mock.pstmn.io/takehometest/web';
const dashboard = '/dashboard';

const axiosInstance = axios.create({
  baseURL,
  timeout: 3000,
});

export const useDasboardData = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(dashboard);
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data, error };
};
