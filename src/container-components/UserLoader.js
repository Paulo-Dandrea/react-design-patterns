import React, { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "http://localhost:8080";

export const UserLoader = ({ userId, children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const user = (
          await axios.get(`/users/${userId}`, { baseURL: baseURL })
        ).data;
        setUser(user);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [userId]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }
        return child;
      })}
    </>
  );
};
