  const socket = new WebSocket('ws://localhost:5000/ws');

  export const connect = () => {
    socket.onopen = () => {
      console.log('WebSocket Client Connected');
      socket.send(JSON.stringify({ type: 'greet', payload: 'Hello Server!' }));
    };

    socket.onmessage = (message) => {
      console.log('Received:', message.data);
    };

    socket.onerror = (error) => {
      console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
      console.log('WebSocket Client Disconnected');
    };
  }

  export const sendMessage = (msg: string) => {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: 'message', payload: msg }));
    } else {
      console.error('WebSocket is not open. Ready state:', socket.readyState);
    }
  }
