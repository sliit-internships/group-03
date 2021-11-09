import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Layouts
import HomeLayoutRoute from "./components/layouts/HomeLayout";

//components
import Home from './components/Home';
import Admin from './components/Users/Admin';
import Student from './components/Users/Student';
import Evaluator from './components/Users/Evaluator';
import Supervisor from './components/Users/Supervisor';

// Routing
import PrivateRoute from "./components/routing/PrivateRoute";

// Screens
import PrivateScreen from "./components/loginscreens/PrivateScreen";
import LoginScreen from "./components/loginscreens/LoginScreen";
import RegisterScreen from "./components/loginscreens/RegisterScreen";
import ForgotPasswordScreen from "./components/loginscreens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/loginscreens/ResetPasswordScreen";


const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <HomeLayoutRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/" component={PrivateScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPasswordScreen}
          />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPasswordScreen}
          />
          <Route path="/admin" component={Admin} />
          <Route path="/student" component={Student} />
          <Route path="/evaluator" component={Evaluator} />
          <Route path="/Supervisor" component={Supervisor} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;


/*          <Route path="/admin" component={Admin} />*/ 

/*          <Route path="/student" component={Student} />*/


/**
          <Redirect from="/" to="/admin/dashboard" />


          <Redirect from="/" to="/student/dashboard" /> */