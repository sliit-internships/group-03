import React from 'react';  
import { Route } from 'react-router-dom';  
  
const HoemLayout = ({ children }) => (                         
    <div>  
      {children}                                       
    </div>  
  );  
  
  const HomeLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={props => (  
        <HoemLayout>  
            <Component {...props} />  
        </HoemLayout>  
      )} />  
    )  
  };  
  
export default HomeLayoutRoute;  