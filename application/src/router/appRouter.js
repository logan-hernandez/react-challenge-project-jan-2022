import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders} from '../components';

const AppRouter = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/login" element={
          auth.email
            ? <ViewOrders  {...props}/>
            : <Login {...props}/>
        }/>
        <Route path="/order" element={
          auth.email
            ? <OrderForm  {...props}/>
            : <Navigate replace to='/login' />
        }/>
        <Route path="/view-orders" element={
          auth.email
            ? <ViewOrders  {...props}/>
            : <Navigate replace to='/login' />
        }/>
      </Routes>
    </Router>
  );
}

export default AppRouter;
