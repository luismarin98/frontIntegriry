import { Route, Routes, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from './Routes/DashboardRoute';
import { LOGIN_ROUTE } from './Routes/LoginRoute';
import { PRODUCTOS_ROUTE } from './Routes/ProductosRoute';
import { HOME_ROUTE } from './Routes/HomeRoute';
import { ClienteType } from './Interfaces/ClienteType';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { getCliente } from './Redux/Client/client.slice';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const tokenData: string | null = localStorage.getItem('usuario');

  useEffect(() => {
    if (tokenData !== null) {
      try {
        const decodedToken = jwtDecode(tokenData).sub!;
        const parsedCliente: ClienteType | null = decodedToken ? JSON.parse(decodedToken) : null;
        if (parsedCliente) {
          dispatch(getCliente(parsedCliente))
          navigate(`/dashboard/${parsedCliente.nombres}`);
        }
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-600 flex bg-fondo-bg bg-opacity-10 bg-cover bg-no-repeat bg-center">
      <Routes>
        <Route path="/" element={<LOGIN_ROUTE />} />
        <Route path="/dashboard/:nombres" element={<DASHBOARD_ROUTE />}>
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