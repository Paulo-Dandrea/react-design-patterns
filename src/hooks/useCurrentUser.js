import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrentUser = () => {
  const [user, SetUser] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      SetUser(response.data);
    })();
  }, []);

  return user;
};
