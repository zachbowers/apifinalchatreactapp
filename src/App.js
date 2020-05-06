import React from "react";
import ChatApp from './components/ChatApp.js';
import Auth from './components/auth.js';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/stores.js';
import AppBar from '@material-ui/core/AppBar';
import NavHeader from "./components/navheader";
import {StreamChat} from "stream-chat";

function App() {
    return (
        <div className="siteNav">
            <Provider store={store}>
                <HashRouter>
                    <NavHeader />
                    <div className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0" id="nav1bar">
                        <AppBar />
                        <Route exact path="/" render={() => <chatApp />} />
                        <Route exact path="/signin" render={() => <Auth />} />
                    </div>
                    <ChatApp />
                </HashRouter>
            </Provider>
        </div>
    )
}
export default App;


//original
/*function App() {
    return (
        <div className="siteNav">
            <Provider store={store}>
                <HashRouter>
                    <div className="NavBar">
                        <AppBar />
                        <Route exact path="/" render={() => <chatApp />} />
                        <Route exact path="/signin" render={() => <Auth />} />
                    </div>
                </HashRouter>
            </Provider>
        </div>
    )
}
export default App;*/