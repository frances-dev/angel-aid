import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Banner from './Banner/Banner';
import AuthProvider from './context/AuthProvider';
import Header from './Header/Header';
import PopularDoctors from './PopularDoctors/PopularDoctors';
import PopularServices from './PopularServices/PopularServices';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path='/home'>
              <Banner></Banner>
              <PopularDoctors></PopularDoctors>
            </Route>

            <Route path='/sign-up'>
              <SignUp></SignUp>
            </Route>

          </Switch>
        </Router>


      </AuthProvider>

    </div>
  );
}

export default App;
