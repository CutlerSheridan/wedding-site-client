import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminAuth from './AdminAuth';

const AdminWrapper = () => {
  const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!jwt && location.pathname !== '/admin/auth') {
  //     navigate('/admin/auth');
  //   }
  // }, [jwt, location]);

  return (
    <>
      {jwt ? <Outlet /> : <AdminAuth />}
      {/* <Outlet /> */}
    </>
  );
};

export default AdminWrapper;
