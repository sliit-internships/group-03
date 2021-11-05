import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Layouts
import HomeLayoutRoute from "./components/layouts/HomeLayout";

//components
import Home from './components/Home';
import Admin from './components/Admin';

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
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

/*
<Route 
exact
path="/admin" 
component={Admin} 
/>

<AdminLayoutRoute exact path="/Admin" component={Admin} />

*/