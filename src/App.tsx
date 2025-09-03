import React from 'react'
import { connect, sendMessage } from './Api'
import Header from './components/Header'
import ChatHistory from './components/ChatHistory';

function App() {

  const [messages, setMessages] = React.useState<string[]>([]);

  React.useEffect(() => {
    connect((msg: string) => {
      setMessages(prevMessages => [...prevMessages, msg]);
    });
    sendMessage("Hello from client!");
  }, []);


  return (
    <div className=" p-3 flex flex-col items-center gap-3">
      <Header />
      <ChatHistory messages={messages} />
      <button onClick={() => sendMessage("Button clicked!")} className=' p-5 border-2 border-amber-200 '>Send Message</button>
    </div>
  )
}

export default App
