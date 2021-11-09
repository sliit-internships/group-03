import React from "react";
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

//const HomeLayout = ({ children }) => (
//  <div className="login-layout">
//    <p>Login Layout</p>
//    {children}
//  </div>
//);

//export default HomeLayout;


//export function HomeLayout() {
//    const classes = useStyles();
//    return (
 ///   <div className={classes.root}>
 //           <CssBaseline/>
  //          <Header/>
  //          <PlaceToVisit/>
  //      </BrowserRouter>
  //  </div>
  //  );
//  }

  const HomeLayout = ({ children, ...rest }) => {
    const classes = useStyles();
    return (
    <div className='page page-dashboard'>

    </div>
    );
  };
  
  const HomeLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => (
          <HomeLayout>
            <Component {...props} />
          </HomeLayout>
        )}
      />
    );
  };
  
  export default HomeLayoutRoute;
  