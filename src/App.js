import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Header from './componenets/Header';
import SideMenu from './componenets/SideMenu';
import Home from './componenets/Home';
import Login from './componenets/Login';
import Register from './componenets/Register';
import RTSPGrid from './componenets/RTSPGrid';
import ProtectedRoute from './helpers/ProtectedRoute';
import {ToastContainer} from 'react-toastify';
import logo from './img/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App" id="outer-container">
                <ToastContainer
                    newestOnTop={true}
                    hideProgressBar={true}
                    pauseOnHover={false}
                    autoClose={2000}
                    position="bottom-right"
                />
                <Header/>
                <SideMenu/>
                <main id="page-wrap">
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <ProtectedRoute path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <ProtectedRoute path="/rtsp" component={RTSPGrid}/>
                    </div>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
