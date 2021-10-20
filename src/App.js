import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './About/About';
import './App.css';
import Appointment from './Appointment/Appointment';
import Banner from './Banner/Banner';
import AuthProvider from './context/AuthProvider';
import Departments from './Departments/Departments';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import PopularDoctors from './PopularDoctors/PopularDoctors';
import Services from './Services/Services';
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
              <Departments></Departments>
              <Appointment></Appointment>
            </Route>

            <Route path='/services'>
              <Services></Services>
            </Route>

            <Route path='/sign-up'>
              <SignUp></SignUp>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div >
  );
}

export default App;
