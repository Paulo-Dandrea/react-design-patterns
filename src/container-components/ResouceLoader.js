import React, { useState, useEffect } from "react";

import axios from "axios";

const baseURL = "http://localhost:8080";

export const ResourceLoader = ({ resourceUrl, resourceName, children }) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      console.log("Resoucer loader");
      try {
        const data = (
          await axios.get(resourceUrl, { baseURL: baseURL })
        ).data;
        setState(data);
        console.log({data});
      } catch (error) {
        console.log(error);
      }
    })();
  }, [resourceUrl]);

  return (
    <>
    {/* WIL: mapping children in a HOC */}
      {React.Children.map(children, (child) => {
      
        if (React.isValidElement(child)) {
            // WIL: Enabling this container to return a children with any props
          return React.cloneElement(child, { [resourceName]: state });
        }
        return child;
      })}
    </>
  );
};
