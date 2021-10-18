import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Consultants from './Pages/Home/Consultants/Consultants';
import DiagnosisCorner from './Pages/Home/DiagnosisCorner/DiagnosisCorner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/consultants">
            <Consultants></Consultants>
          </Route>
          <Route path="/diagnosisCorner">
            <DiagnosisCorner></DiagnosisCorner>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Footer></Footer>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
