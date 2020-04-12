import React from 'react';
import { Chat, Channel, ChannelHeader, Window } from 'stream-chat-react';
import { MessageList, MessageInput, MessageLivestream } from 'stream-chat-react';
import { MessageInputSmall, Thread } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('exchr7a3dmm3');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZ2VudGxlLW1vZGUtMSJ9.b7UgvP5lSAIaW5War906oqruJmhwsYIMS0qlTqGfVr4';

chatClient.setUser(
    {
      id: 'gentle-mode-1',
      name: 'Gentle mode',
      image: 'https://getstream.io/random_svg/?id=gentle-mode-1&name=Gentle+mode'
    },
    userToken,
);

const channel = chatClient.channel('livestream', 'webapi', {
  image: 'https://goo.gl/Zefkbx',
  name: 'OurGlass',
});

const App = () => (
    <Chat client={chatClient} theme={'livestream dark'}>
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

export default App;