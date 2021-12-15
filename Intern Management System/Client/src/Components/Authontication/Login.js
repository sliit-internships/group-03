import React, {useState,useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundHeader from "../../images/photo.jpg"

import AuthService from '../../Services/AuthService';
import Message from './Message';
import {AuthContext} from '../../Context/AuthContext';

const theme = createTheme();

const Login = props=>{
    const [user,setUser] = useState({username: "", password : ""});
    const [message,setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                if(user.role === "admin"){
                    props.history.push('/admin');
                } else if (user.role === "student") {
                    props.history.push('/Student');
                } else if (user.role === "evaluator") {
                    props.history.push('/Evaluator');
                } else if (user.role === "supervisor") {
                    props.history.push('/Supervisor');
                } else {
                    setMessage(message);
                }
            }
            else
                setMessage(message);
        });
    }



    return (
        <ThemeProvider theme={theme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url('+ BackgroundHeader+')',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>

                <form onSubmit={onSubmit}>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Email"
                    name="username"
                    onChange={onChange} 
                    autoComplete="username"
                    autoFocus
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    onChange={onChange} 
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
    
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
    
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
    
                </form>
    
                  <Grid container>
                    <Grid item xs>
                        <Link href="/resetpassowrd" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
    
                    <Grid item>
                      <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
    
                    {message ? <Message message={message}/> : null}
    
                  </Grid>
                </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
}

export default Login;