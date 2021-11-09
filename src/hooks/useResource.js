import axios from "axios";
import { useState, useEffect } from "react";

export const userResource = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      setData(response.data);
    })();
  }, [url]);

  return data;
};
