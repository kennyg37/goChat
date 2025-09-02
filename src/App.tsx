import React from 'react'
import { connect, sendMessage } from './Api'

function App() {

  React.useEffect(() => {
    connect();
    sendMessage("Hello from client!");
  }, []);


  return (
    <div className="App">
      <h1>WebSocket Client</h1>
      <button onClick={() => sendMessage("Button clicked!")}>Send Message</button>
    </div>
  )
}

export default App
