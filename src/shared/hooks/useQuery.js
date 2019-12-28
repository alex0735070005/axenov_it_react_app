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
        if (redirect && !data.username) redirect();
        setResponse({
          ...responseData,
          data,
        });
      })
      .catch(() => {
        if (redirect) redirect();
      });
  });

  return responseData;
}

export default useQuery;
