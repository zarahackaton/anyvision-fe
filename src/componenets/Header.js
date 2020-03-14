import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedUser: ''
        }
    }

    logout = () => {
        localStorage.clear();
        this.setState({loggedUser: ''});
    };

    componentDidMount() {
        const loggedUser = localStorage.getItem('username');
        this.setState({loggedUser: loggedUser});
    }

    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                {this.state.loggedUser &&
                <div style={{position: 'absolute', right: '1vw'}}>
                    <strong className="mr-3" style={{fontSize: '0.8em'}}>Welcome {this.state.loggedUser}</strong>
                    <Button href='/' type="submit" size="small" variant="contained" onClick={this.logout}>logout</Button>
                </div>
                }
            </header>
        );
    }
}

export default Header;