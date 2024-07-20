import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:3000';

const Chatbox = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState(['Hello! How can I help you?', 'I am a chatbot.']);
  const [mes, setMes] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(0);

  const socket = useRef(null);

  useEffect(() => {
    socket.current = io(SOCKET_SERVER_URL);

    const handleNewMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
      console.log('Data received:', data);
    };

    const handleOnlineUsers = (count) => {
      setOnlineUsers(count);
      console.log('Online users:', count);
    };

    socket.current.on('connect', () => {
      console.log('Connected to the server');
    });

    socket.current.on('message', handleNewMessage);
    socket.current.on('onlineUsers', handleOnlineUsers);

    return () => {
      socket.current.off('message', handleNewMessage);
      socket.current.off('onlineUsers', handleOnlineUsers);
      socket.current.disconnect();
    };
  }, []);

  const toggleChat = () => {
    if (!showChat) {
      setShowChat(true);
    }
  };

  const minusButton = () => {
    if (showChat) {
      setShowChat(false);
    }
  };

  const closeButton = () => {
    //leave the chat and turn to a logo 
  };

  const sendMessage = (e) => {
    e.preventDefault(); 
    if (!mes) {
      return;
    }
    console.log(mes);
    socket.current.emit('message', mes);
    setMes('');
  };

  return (
    <div className={`fixed bottom-0 right-6 ${showChat ? 'h-96' : 'h-10'} md:w-80 w-64 bg-white shadow-lg transition-all duration-300 rounded-t-md`}>
      <div className={`bg-indigo-500 p-2 ${showChat ? 'cursor-default' : 'cursor-pointer'} text-white rounded-t-md flex justify-between`} onClick={toggleChat}>
        <p>Chatbox</p>
        <p>{onlineUsers}</p>
        {showChat && (
          <div className='flex flex-row gap-x-3 items-center mr-1'>
            <button onClick={minusButton}><img src='./src/assets/minus.png' className='w-3 h-4' /></button>
            <button onClick={closeButton}><img src='./src/assets/multiplication-sign.png' className='w-[11px] h-[11px]' /></button>
          </div>
        )}
      </div>
      {showChat && (
        <div>
          <div className='h-72 overflow-y-auto p-2'>
            {messages.map((message, index) => (
              <div key={index} className='flex justify-end'>
                <div className='bg-indigo-500 text-white p-2 rounded-md mb-2'>
                  {message}
                </div>
              </div>
            ))}        
          </div>
          <div className="h-px flex-auto bg-gradient-to-r from-indigo-500 via-slate-500 to-purple-500"></div>
          <div className='flex flex-row items-center justify-center mt-3 gap-4 mx-2'>
            <input
              type='text'
              value={mes}
              onChange={(e) => setMes(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] w-full px-3 py-2 outline-none"
            />
            <button onClick={sendMessage}><img src='./src/assets/communication.png' className='w-6 h-6' /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbox;
