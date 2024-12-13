import { /* Navigate, */ Route, Routes } from 'react-router-dom';
import { DASHBOARD_ROUTE } from './Routes/DashboardRoute';
import { LOGIN_ROUTE } from './Routes/LoginRoute';
import { PRODUCTOS_ROUTE } from './Routes/ProductosRoute';
import { HOME_ROUTE } from './Routes/HomeRoute';

function App() {
  return (
    <div className="w-screen h-screen bg-neutral-600 flex bg-fondo-bg bg-opacity-10 bg-cover bg-no-repeat bg-center">
      <Routes>
        <Route path='/' element={<LOGIN_ROUTE />} />
        <Route path='/dashboard' element={<DASHBOARD_ROUTE />}>
          <Route path='' element={<HOME_ROUTE />} />
          <Route path='productos' element={<PRODUCTOS_ROUTE />} />
        </Route>
        {/*         <Route path='/dashboard' element={isAuthenticated() ? <DASHBOARD_ROUTE /> : <Navigate to={'/login'} />}>
                    <Route path='' element={<HOME_ROUTE />} />
          <Route path='productos' element={<PRODUCTOS_ROUTE />} />
        </Route> */}
      </Routes>
    </div>
  );
}

export default App;

export const isAuthenticated = () => {
  const token = localStorage.getItem('cliente');
  return token !== null;
};