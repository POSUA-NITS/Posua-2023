import React, {useEffect} from "react";

const Error = () => {
  useEffect(() => {
    document.title = "404 | Posua 2023";
  }, []);
  return (
    <div>
      <h1>404 Page not Found</h1>
    </div>
  );
};

export default Error;
