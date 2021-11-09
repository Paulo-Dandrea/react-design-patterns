import { useState, useEffect } from "react";
import axios from "axios";

export const withUser = (WrappedComponent, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, [user]);

    return <WrappedComponent {...props} user={user} />;
  };
};
