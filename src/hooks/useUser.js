import axios from "axios";
import { useState, useEffect } from "react";

export const useUser = (userId) => {
  const [user, SetUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/users/${userId}`);
      SetUser(response.data);
    })();
  }, [userId]);

  return user;
};
