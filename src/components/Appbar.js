import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useDispatch } from "react-redux";
import { setUserLogOutState } from "../features/userSlice";
import { useHistory } from "react-router-dom";
import { UserName } from '../app/useStore';

export default function MenuAppBar() {

    const [anchorEl, setAnchorEl] = React.useState(null);


    const history = useHistory();
    const dispatch = useDispatch();
    const username = UserName();

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        dispatch(setUserLogOutState())
        history.push({ pathname: '/' })
    };

    return (
        <Box sx={{ flexGrow: 1 }}>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" align='left' component="div" sx={{ flexGrow: 1 }}>SS Admin Panel</Typography>

                    <div>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <AccountCircle />
                        </IconButton>
                        <Menu id="menu-appbar" anchorEl={anchorEl}
                            anchorOrigin={{ vertical: 'top', horizontal: 'right', }}
                            keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
                            open={Boolean(anchorEl)}
                            onClose={() => setAnchorEl(null)}
                        >
                            <MenuItem >Hi, {username}</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>

                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
