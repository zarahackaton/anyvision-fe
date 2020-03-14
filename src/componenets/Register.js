import React, {Component} from 'react';
import * as userApi from '../apiRoutes/User';
import Button from '@material-ui/core/Button';
import {toast} from 'react-toastify';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import User from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Email from '@material-ui/icons/Email';

class Register extends Component {
    constructor(props) {
        super(props);

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.emailRef = React.createRef();
    }

    register = async (e) => {
        e.preventDefault();
        try {
            const result = await userApi.register(this.usernameRef.current.value,
                                                  this.passwordRef.current.value,
                                                  this.emailRef.current.value);
            toast.success(result.data.message);
            this.props.history.push('/');
        }
        catch (error) {
            if (error.response.status === 409) {
                toast.error(error.response.data.message);
            }
        }
    };

    render() {
        return (
            <form className="d-inline-block m-5" onSubmit={this.register}>
                <h1>Sign Up</h1>
                <p className="h6 mt-3">Username</p>
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
                <p className="h6 mt-3">Password</p>
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
                <p className="h6 mt-3">Email</p>
                <TextField inputRef={this.emailRef}
                           type="email"
                           variant="outlined"
                           fullWidth
                           required
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position="start">
                                       <Email/>
                                   </InputAdornment>
                               )
                           }}/>
                <div>
                    <Button className="mt-4" type="submit" size="large" variant="contained">Login</Button>
                </div>
            </form>
        );
    }
}

export default Register;