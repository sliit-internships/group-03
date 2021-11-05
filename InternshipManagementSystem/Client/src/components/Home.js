import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './layouts/homecomponents/Header';
import PlaceToVisit from './layouts/homecomponents/PlaceToVisit';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Home = ({ className }) => {
  const classes = useStyles();
    return (  
      <div className={classes.root}>
      <CssBaseline />
      <Header />
      <PlaceToVisit />
    </div>
    );  
};

export default Home;