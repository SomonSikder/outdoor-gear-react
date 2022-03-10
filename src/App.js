import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import PrivateRoute from './components/Pages/PrivateRoute/PrivateRoute';
import Register from './components/Pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/Pages/NotFound/NotFound';
import MyOrder from './components/Pages/MyOrder/MyOrder';
import Explore from './components/Pages/Explore/Explore';
import Payment from './components/Pages/Payment/Payment';
import Review from './components/Pages/Review/Review';
import Order from './components/Pages/Order/Order';
import Admin from './components/Pages/Admin/Admin';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/order/:id">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
