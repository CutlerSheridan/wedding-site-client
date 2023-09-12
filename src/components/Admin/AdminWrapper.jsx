import { useEffect, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AdminAuth from './AdminAuth';

const AdminWrapper = () => {
  const { jwt, updateJwt } = useOutletContext();

  const toggleJwt = () => {
    if (jwt) {
      updateJwt(null);
    } else {
      updateJwt(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGRlYWMwZTYwZDk1ODE1ODRjOWYzNjgiLCJ1c2VybmFtZSI6ImN1dGxlciIsImlhdCI6MTY5NDU0OTI4MH0.abEFKIxhO1R8iKjBLHjFYwbZ6PfFYfguVEycRy0-ils'
      );
    }
  };

  return (
    <>
      <button
        type="button"
        className="admin-toggleAuthButton"
        onClick={toggleJwt}
      >
        Toggle auth {jwt ? 'off' : 'on'}
      </button>
      {jwt ? (
        <Outlet context={{ jwt, updateJwt }} />
      ) : (
        <AdminAuth updateJwt={updateJwt} />
      )}
      <p>{'jwt: ' + jwt}</p>
    </>
  );
};

export default AdminWrapper;
