import React, { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "http://localhost:8080";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("hello");
      try {
        const currentUser = (
          await axios.get("/current-user", { baseURL: baseURL })
        ).data;
        setUser(currentUser);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
