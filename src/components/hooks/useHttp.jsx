import { useEffect, useState } from 'react';

export const useHttp = (fetchFn, params) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchFn(params).then(data => setData(data));
  }, [params, fetchFn]);

  return [data, setData];
};
