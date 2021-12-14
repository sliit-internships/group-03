import React, {useState,useRef,useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import AuthService from '../../Services/AuthService';
import Message from './Message';


const theme = createTheme();

const Register = props=>{

  const [user,setUser] = useState({username: "", password : "", role : "admin"});
  const [message,setMessage] = useState(null);
  let timerID = useRef(null);

  useEffect(()=>{
      return ()=>{
          clearTimeout(timerID);
      }
  },[]);

  const onChange = e =>{
      setUser({...user,[e.target.name] : e.target.value});
  }

  const resetForm = ()=>{
      setUser({username : "", password : "",role : ""});
  }

  const onSubmit = e =>{
      e.preventDefault();
      AuthService.register(user).then(data=>{
          const { message } = data;
          setMessage(message);
          resetForm();
          if(!message.msgError){
              timerID = setTimeout(()=>{
                  props.history.push('/login');
              },2000)
          }
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ m: 2 }}>
              Admin Registration
          </Typography>
          
            <form onSubmit={onSubmit}>
            <Grid container spacing={2}>

              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  value={user.username}
                  id="studentid"
                  label="Enter Email"
                  autoFocus
                  onChange={onChange} 
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password} 
                  onChange={onChange} 
                />
              </Grid>


              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
            >
              Sign Up
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
            </form>
        </Box>
        {message ? <Message message={message}/> : null}
      </Container>
    </ThemeProvider>
  );
}
export default Register;


/*
              <Grid item xs={12}>
                <Hidden                  
                  required
                  fullWidth
                  name="role"
                  label="Role"
                  id="role"
                  value="student"
                />
              </Grid>

*/ 