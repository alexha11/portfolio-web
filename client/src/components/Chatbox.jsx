import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

import {sendIcon, minusIcon, multipleIcon, smileIcon} from '../assets'

const SOCKET_SERVER_URL = 'https://portfolio-web-server-is6q.onrender.com';

const Chatbox = () => {
  const [showChat, setShowChat] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [messages, setMessages] = useState(['Welcome to the chat!', 'Now you can chat with other users.']);
  const [mes, setMes] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [loading, isLoading] = useState(true);

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
      isLoading(false);
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
          <button onClick={closeButton} className='rounded-full fixed right-8 bottom-12 z-50'><img src={smileIcon} className='h-14 w-14 '/></button>
        </div>
      )  
      
      :(
        <div
          className={`fixed bottom-0 right-6 z-50 ${
            showChat ? 'h-[300px] lg:h-[410px]' : 'h-10'
          } lg:w-80 md:w-64 w-52 shadow-lg transition-all duration-300 rounded-t-md`}
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
                <p>Users: {loading ? (
                  <div className="inline-block">
                   <svg aria-hidden="true" className="inline w-5 h-5 text-gray-200 animate-spin fill-[#FF0000]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                                      
                  </div>
                ) : onlineUsers}</p>
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
              <div className="bg-chatMainColor h-[220px] lg:h-80 overflow-y-scroll snap-end p-2">
                {messages.map((message, index) => (
                  <div key={index} className="flex justify-end">
                    <div className="bg-slate-600 text-white text-[12px] lg:text-base p-2 rounded-md mb-2">
                      {message}
                    </div>
                    <div ref={messagesEndRef} />
                  </div>
                ))}
              </div>
              <form className="bg-chatMainColor h-28" onSubmit={sendMessage}>
                <div className="flex flex-row items-center justify-center gap-4 mx-4 lg:py-1">
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
