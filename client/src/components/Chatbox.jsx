import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

import {sendIcon, minusIcon, multipleIcon, jetIcon} from '../assets'

const SOCKET_SERVER_URL = 'http://localhost:3000';

const Chatbox = () => {
  const [showChat, setShowChat] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [messages, setMessages] = useState(['Welcome to the chat!', 'Now you can chat with other users.']);
  const [mes, setMes] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

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
      setTimeout(() => {
        setIsConnected(true);
      }, 1000);
    });

    socket.current.on('message', handleNewMessage);
    socket.current.on('onlineUsers', handleOnlineUsers);

    return () => {
      socket.current.off('message', handleNewMessage);
      socket.current.off('onlineUsers', handleOnlineUsers);
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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
    setShowClose(!showClose);
  };

  const sendMessage = (e) => {
    e.preventDefault(); 
    if (!mes) {
      return;
    }
    setMes(mes.trim());
    //console.log(mes);
    socket.current.emit('message', mes);
    setMes('');
  };

  return (
    <div>
      {showClose 
      ? (
        <div>
          <button onClick={closeButton} className='rounded-full fixed right-8 bottom-12'><img src={jetIcon} className='h-14 w-14 '/></button>
        </div>
      )  
      
      :(
        <div
          className={`fixed bottom-0 right-6 ${
            showChat ? 'h-[410px]' : 'h-10'
          } md:w-80 w-64 shadow-lg transition-all duration-300 rounded-t-md`}
        >
          <div
            className={`bg-chatMainColor p-2 ${
              showChat ? 'cursor-default' : 'cursor-pointer'
            } text-white rounded-t-md flex justify-between`}
            onClick={toggleChat}
          >
            <div className="flex w-full flex-row items-center justify-between">
              <h1 className="text-base mr-2">Chat</h1>
              <div className="flex flex-row items-center mr-1">
                <div
                  className={`mr-2 h-3 w-3 rounded-full ${
                    isConnected ? 'bg-connectedColor' : 'bg-disconnectedColor'
                  }`}
                  title="Chat connection"
                ></div>
                <p>Users: {onlineUsers}</p>
              </div>
            </div>
            {showChat && (
              <div className="flex flex-row gap-x-3 items-center mx-1">
                <button onClick={minusButton}>
                  <img src={minusIcon} className="w-4 h-4" />
                </button>
                <button onClick={closeButton}>
                  <img src={multipleIcon} className="w-[18px] h-[14px]" />
                </button>
              </div>
            )}
          </div>
  
          {showChat && (
            <div>
              <div className="bg-chatMainColor h-80 overflow-y-scroll snap-end p-2">
                {messages.map((message, index) => (
                  <div key={index} className="flex justify-end">
                    <div className="bg-slate-600 text-white p-2 rounded-md mb-2">
                      {message}
                    </div>
                    <div ref={messagesEndRef} />
                  </div>
                ))}
              </div>
              <form className="bg-chatMainColor h-28" onSubmit={sendMessage}>
                <div className="flex flex-row items-center justify-center gap-4 mx-4 py-1">
                  <input
                    type="text"
                    value={mes}
                    placeholder="Aa"
                    onChange={(e) => setMes(e.target.value)}
                    className="bg-slate-600 text-textLight text-sm rounded-full focus:ring-[#4649ff] focus:border-[#4649ff] w-full px-3 py-2 outline-none"
                  />
                  <button>
                    <img src={sendIcon} className="w-6 h-6" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );  
}

export default Chatbox;
