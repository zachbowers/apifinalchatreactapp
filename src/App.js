import React from "react";
import chatApp from './components/ChatApp.js';
import Auth from './components/auth.js';
import NavHeader from './components/navheader.js';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/stores.js';
import AppBar from '@material-ui/core/AppBar';

import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('exchr7a3dmm3');
const userToken = 'myusertoken';

chatClient.setUser(
    {
        id: 'Gentle-mode-1',
        name: '',
        image: 'https://getstream.io/random_svg/?id=gentle-mode-1&name=Gentle+mode'
    },
    userToken,
);

const channel = chatClient.channel('livestream', 'webapi', {
    name: 'OurGlass',
});

const App = () => (
    <div className="wrap">
        <div className="siteNav">
            <Provider store={store}>
                <HashRouter>
                    <NavHeader />
                    <AppBar />
                    <Route exact path="/" render={() => <chatApp />} />
                    <Route exact path="/signin" render={() => <Auth />} />
                </HashRouter>
            </Provider>
        </div>
        <Chat client={chatClient} theme={'livestream light'}>
            <Channel channel={channel} Message={MessageLivestream}>
                <Window hideOnThread>
                    <ChannelHeader live />
                    <MessageList />
                    <MessageInput Input={MessageInputSmall} focus />
                </Window>
                <Thread fullWidth />
            </Channel>
        </Chat>
    </div>
);


export default App;