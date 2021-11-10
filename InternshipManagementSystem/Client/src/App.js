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

// Forms
import FormI6 from "./Forms/FormI6/FormI6";
import FormI1A from "./Forms/FormI_1A/FormI_1A";
import FormI1C from "./Forms/FormI1C/FormI1C";
import FormI3A from "./Forms/FormI3A/FormI3A";
import FormI1B from "./Forms/FormI1B/FormI1B";
import FormI5A from "./Forms/FormI5A/FormI5A";
import FormI3ASupervisor from "./Forms/FormI3A/supervisor/FormI3ASupervisor";

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
          <Route exact path="/fI1A" component={FormI1A} />
          <Route exact path="/fI1C" component={FormI1C} />
          <Route exact path="/fI3A" component={FormI3A} />
          <Route exact path="/fI6" component={FormI6} />
          <Route exact path="/fI1B" component={FormI1B} />
          <Route exact path="/fI3ASupervisor" component={FormI3ASupervisor} />
          <Route exact path="/fI5A" component={FormI5A} />
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