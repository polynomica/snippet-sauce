import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sslogo from '../res/sslogo.webp';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from "react-redux";
import { setActiveUser } from "../features/userSlice";



function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://snippetsauce.netlify.app/">Snippet Sauce</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function LoginPage() {

    const history = useHistory();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async (event) => {
        setIsLoading(true)
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('email').trim() !== "" && data.get('password').trim() !== "") {
            await axios.post('https://snippetsauce.herokuapp.com/api/admin_login', { git_username: `${data.get('email')}`, password: `${data.get('password')}` })
                .then((response) => {
                    if (response.data.logged_in) {
                        console.log(response.data)
                        dispatch(setActiveUser({ username: response.data.admin_username, loggedIn: true, role: response.data.role, token: response.data.admin_token, }));
                        history.push({ pathname: '/' })
                    } else alert("Wrong username or password !")
                    setIsLoading(false)
                })
                .catch((error) => { console.log(error); setIsLoading(false) });

        } else {
            alert("Please enter username and password")
        }

    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                    <img src={sslogo} style={{ width: 50, height: 50, marginBottom: 20 }} />
                    <Typography component="h1" variant="h5">Admin Login</Typography>
                    <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
                        <TextField margin="normal" required fullWidth id="email" label="Username" name="email" autoComplete="email" autoFocus />
                        <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
                        <Button disabled={isLoading} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            {!isLoading ? "Sign In" : <CircularProgress size={25} />}
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}