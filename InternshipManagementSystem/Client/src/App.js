import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Home
import Home from './Components/Home';

// Authontication
import Login from './Components/Authontication/Login';
import StudentRegister from './Components/Authontication/RegisterStudent';
import AdminRegister from './Components/Authontication/RegisterAdmin';
import SupervisorRegister from './Components/Authontication/RegisterSupervisor';
import EvaluatorRegister from './Components/Authontication/RegisterEvaluator';

// Password
import ForgotPassowrd from './Components/Authontication/ForgotPassowrd';
import ResetPassowrd from './Components/Authontication/ResetPassowrd';

// Routes
import PrivateRoute from './Hooks/PrivateRoute';
import UnPrivateRoute from './Hooks/UnPrivateRoute';

// Users
import Admin  from './Components/Users/Admin';
import Student  from './Components/Users/Student';
import Evaluator  from './Components/Users/Evaluator';
import Supervisor  from './Components/Users/Supervisor';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>

      <UnPrivateRoute path="/login" component={Login}/>
      <UnPrivateRoute path="/register" component={StudentRegister}/>
      <UnPrivateRoute path="/AdminRegister" component={AdminRegister}/>
      <UnPrivateRoute path="/SupervisorRegister" component={SupervisorRegister}/>
      <UnPrivateRoute path="/EvaluatorRegister" component={EvaluatorRegister}/>
      <UnPrivateRoute path="/forgotPassowrd" component={ForgotPassowrd}/>
      <UnPrivateRoute path="/resetpassowrd" component={ResetPassowrd}/>

      <PrivateRoute path="/admin" roles={["admin"]} component={Admin}/>
      <PrivateRoute path="/student" roles={["student"]} component={Student}/>
      <PrivateRoute path="/evaluator" roles={["evaluator"]} component={Evaluator}/>
      <PrivateRoute path="/supervisor" roles={["supervisor"]} component={Supervisor}/>
    </Router>
  );
}

export default App;
