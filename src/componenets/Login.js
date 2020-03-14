import React, {Component} from 'react';
import * as userApi from '../apiRoutes/User';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import User from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';

class Login extends Component {
    constructor(props) {
        super(props);

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    login = async (e) => {
        e.preventDefault();
        try {
            const result = await userApi.login(this.usernameRef.current.value, this.passwordRef.current.value);
            localStorage.setItem('accessToken', result.data.accessToken);
            localStorage.setItem('username', result.data.username);
            console.log(result.data);
            toast.success(result.data.message);
            window.location = '/';
        }
        catch (error) {
            if (error.response.status === 401) {
                toast.error(error.response.data.message);
            }
        }
    };

    render() {
        return (
            <form className="d-inline-block m-5" onSubmit={this.login}>
                <h1>Sign In</h1>
                <p className="h6 mt-4">Username</p>
                <TextField inputRef={this.usernameRef}
                           variant="outlined"
                           fullWidth
                           required
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <User/>
                                   </InputAdornment>
                               )
                           }}/>
                <p className="h6 mt-4">Password</p>
                <TextField inputRef={this.passwordRef}
                           type="password"
                           variant="outlined"
                           fullWidth
                           required
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Lock/>
                                   </InputAdornment>
                               )
                           }}/>
                <div>
                    <Button className="mt-5" type="submit" size="large" variant="contained">Login</Button>
                </div>
            </form>
        );
    }
}

export default Login;