import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import './loginScreen.scss';
import { useDispatch } from "react-redux";
import { setActiveUser } from "../features/userSlice";

export default function LoginScreen() {

    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const login = () => {
        axios.post('https://snippetsauce.herokuapp.com/api/admin_login', { git_username: `${userName}`, password: `${password}` })
            .then((response) => {
                if (response.data.logged_in) {
                    console.log(response.data)
                    dispatch(setActiveUser({ username: response.data.admin_username, loggedIn: true, role: response.data.role, token: response.data.admin_token, }));
                    history.push({ pathname: '/ssadmin' })
                } else alert("Wrong password or username!")
            })
            .catch((error) => { console.log(error); });
    }

    return (
        <div className="base-flex login-screen">
            <div>
                <h3>Admin Login</h3>
                <div className="mb-3">
                    <label htmlFor="text" className="form-label">Username</label>
                    <input onInputCapture={(e) => setUsername(e.target.value)} type="text" placeholder="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onInputCapture={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>
        </div>
    )
}