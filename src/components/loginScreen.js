import React from "react";
import { useHistory } from "react-router-dom";

export default function LoginScreen() {

    const [userName, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory();

    const login = () => {
        history.push({ pathname: '/admin' })
    }


    return (
        <div className="base-flex login-screen">
            <form>
                <h3>Admin Login</h3>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Username</label>
                    <input onInputCapture={(e) => setUsername(e.target.value)} type="email" placeholder="" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input onInputCapture={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={login} type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}