import React from "react";
import { Route } from 'react-router-dom';  

//const HomeLayout = ({ children }) => (
//  <div className="login-layout">
//    <p>Login Layout</p>
//    {children}
//  </div>
//);

//export default HomeLayout;

const AuthLayout = ({ children }) => (                         
    <div>  
      {children}                                       
    </div>  
  );


const AuthLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <AuthLayout>  
            <Component {...props} />  
        </AuthLayout>  
      )} />  
    )  
};  
  
export default AuthLayoutRoute; 

//export function AuthLayout() {
  //  return (
  //  <div>
  //      <Route path="/SignIn" exact component={SignIn}></Route>
  //      <Route path="/SignUp" exact component={SignUp}></Route>
  //  </div>
 //   );
 // }