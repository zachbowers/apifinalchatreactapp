import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('exchr7a3dmm3');
const userToken = localStorage.getItem(token);

chatClient.setUser(
    {
        id: '',
        name: '',
        image: 'https://getstream.io/random_svg/?id=gentle-mode-1&name=Gentle+mode'
    },
    userToken,
);

const channel = chatClient.channel('livestream', 'webapi', {
    name: 'OurGlass',
});

const ChatApp = () => (
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
);

export default ChatApp;