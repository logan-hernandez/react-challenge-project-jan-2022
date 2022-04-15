import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { Main, Login, OrderForm, ViewOrders} from '../components';
import { useSelector } from 'react-redux';


const AppRouter = (props) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" render={(props) => (
        auth.email
          ? <ViewOrders  {...props}/>
          : <Login {...props}/>
      )}/>
      <Route path="/order" render={(props) => (
        auth.email
          ? <OrderForm  {...props}/>
          : <Redirect to='/login' />
      )}/>
      <Route path="/view-orders" render={(props) => (
        auth.email
          ? <ViewOrders  {...props}/>
          : <Redirect to='/login' />
      )}/>
    </Router>
  );
}

export default AppRouter;
