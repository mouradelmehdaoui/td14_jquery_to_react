import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SuccessMessage = ({ message, redirectPath }) => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 3000); // Redirect after 3 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-success" role="alert">
        {message}
      </div>
      {redirect && <Link to={redirectPath}>Go to Employees Page</Link>}
    </div>
  );
};

export default SuccessMessage;
