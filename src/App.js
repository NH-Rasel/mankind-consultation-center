import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Consultants from './Pages/Home/Consultants/Consultants';
import DiagnosisCorner from './Pages/Home/DiagnosisCorner/DiagnosisCorner';
import ConsultantDetails from './Pages/ConsultantDetails/ConsultantDetails/ConsultantDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/consultantDetails/:consultantsDbId">
              <ConsultantDetails></ConsultantDetails>
            </PrivateRoute>
            <Route path="/consultants">
              <Consultants></Consultants>
            </Route>
            <Route path="/diagnosisCorner">
              <DiagnosisCorner></DiagnosisCorner>
            </Route>
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
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
