import { useEffect, useState } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import AdminAuth from './AdminAuth';

const AdminWrapper = () => {
  const { jwt, updateJwt } = useOutletContext();

  const toggleJwt = () => {
    if (jwt) {
      updateJwt(null);
    } else {
      updateJwt('lalsdjf.lafsjdklfjsf.foasdjfl');
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
      {jwt ? <Outlet /> : <AdminAuth updateJwt={updateJwt} />}
      <p>{'jwt: ' + jwt}</p>
    </>
  );
};

export default AdminWrapper;
