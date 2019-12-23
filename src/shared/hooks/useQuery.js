import axios from 'axios';
import { useState } from 'react';

function useQuery(path, redirect) {
  const [responseData, setResponse] = useState({
    data: null,
    error: null,
  });

  useState(() => {
    axios(path)
      .then(({ data }) => {
        setResponse({
          ...responseData,
          data,
        });
      })
      .catch((error) => {
        if (redirect) redirect();

        setResponse({
          ...responseData,
          error,
        });
      });
  });

  return responseData;
}

export default useQuery;
