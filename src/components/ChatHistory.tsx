import React from 'react'

interface ChatHistoryProps {
    messages: string[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({messages}) => {
  return (
    <div>
        <h2 className=" p-3 text-2xl">Chat History</h2>
        {messages.map((msg:any, index:any) => (
            <div key={index}>
                <p>{msg}</p>
            </div>
        ))}
    </div>

  )
}

export default ChatHistory