import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from './Routes/DashboardRoute';
import { LOGIN_ROUTE } from './Routes/LoginRoute';
import { PRODUCTOS_ROUTE } from './Routes/ProductosRoute';
import { HOME_ROUTE } from './Routes/HomeRoute';
import { jwtDecode } from 'jwt-decode';
import { ClienteType } from './Interfaces/ClienteType';
import { useEffect } from 'react';

function App() {
  const navigate = useNavigate();

  const tokenData: string | null = localStorage.getItem('token');
  let cliente: ClienteType | null = null;

  useEffect(() => {
    if (tokenData !== null) {
      try {
        const decodedToken = jwtDecode(tokenData);
        cliente = decodedToken.sub ? JSON.parse(decodedToken.sub) : null;
        navigate(`/dashboard/${cliente!.nombres}`);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      navigate('/');
    }
  }, [])

  return (
    <div className="w-screen h-screen bg-neutral-600 flex bg-fondo-bg bg-opacity-10 bg-cover bg-no-repeat bg-center">
      <Routes>
        <Route path="/" element={<LOGIN_ROUTE />} />
        <Route path="/dashboard/:nombres" element={tokenData ? <DASHBOARD_ROUTE /> : <Navigate to={'/'} />}>
          <Route path="" element={<HOME_ROUTE />} />
          <Route path="productos" element={<PRODUCTOS_ROUTE />} />
          <Route path="*" element={<EN_DESARROLLO />} />
        </Route>
        <Route path="*" element={<EN_DESARROLLO />} />
      </Routes>
    </div>
  );
}

export default App;

const EN_DESARROLLO = () => {
  return (
    <div className='w-full h-full'>
      <p className='font-bold text-xl'>Seccion aun en desarrollo</p>
    </div>
  )
}