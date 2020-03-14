import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {toast} from 'react-toastify';

/* This helper is responsible for security routing and it applies fallback routes */
class ProtectedRoute extends Component {
    render() {
        const {component: Component, ...props} = this.props;
        const userToken = localStorage.getItem('accessToken');
        return (
            <Route
                {...props}
                render={props => (
                    userToken ?
                        <div>
                            {this.props.path === '/login' ?
                                <div>
                                    {toast.info('You are already logged in')}
                                    <Redirect to='/'/>
                                </div>
                                : <Component {...props} />
                            }
                        </div> :
                        <div>
                            {this.props.path !== '/login' ?
                                <div>
                                    {toast.info('Please sign in first')}
                                    <Redirect to='/login'/>
                                </div> :
                                <Component {...props} />
                            }
                        </div>
                )}
            />
        )
    }
}

export default ProtectedRoute;
