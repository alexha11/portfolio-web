import { useEffect, useId, useRef, useState } from 'react';
import { io } from 'socket.io-client';

import { ChatIcon, CloseIcon, MinusIcon, SendIcon } from './icons';

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_URL ?? 'https://portfolio-web-server-is6q.onrender.com';
const MAX_MESSAGES = 100;
const MAX_MESSAGE_LENGTH = 500;

// Focus an element after React has re-rendered (the control that had focus may be gone)
const focusSoon = (ref) => requestAnimationFrame(() => ref.current?.focus());

const iconButtonClassName = 'flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface hover:text-fg';

const Chatbox = () => {
  const [showChat, setShowChat] = useState(false);
  const [showClose, setShowClose] = useState(false);
  const [messages, setMessages] = useState(['Welcome to the chat!', 'Now you can chat with other visitors.']);
  const [mes, setMes] = useState('');
  const [onlineUsers, setOnlineUsers] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const socket = useRef(null);
  const logRef = useRef(null);
  const inputRef = useRef(null);
  const openButtonRef = useRef(null);
  const bubbleRef = useRef(null);
  const inputId = useId();

  useEffect(() => {
    const client = io(SOCKET_SERVER_URL);
    socket.current = client;

    // Messages come from other visitors: render plain text only and ignore anything else
    const handleNewMessage = (data) => {
      if (typeof data !== 'string') return;
      setMessages((prevMessages) => [...prevMessages, data].slice(-MAX_MESSAGES));
    };
    const handleOnlineUsers = (count) => {
      if (Number.isFinite(count)) setOnlineUsers(count);
    };
    const handleConnect = () => setIsConnected(true);
    const handleDisconnect = () => setIsConnected(false);

    client.on('connect', handleConnect);
    client.on('disconnect', handleDisconnect);
    client.on('message', handleNewMessage);
    client.on('onlineUsers', handleOnlineUsers);

    return () => {
      client.off('connect', handleConnect);
      client.off('disconnect', handleDisconnect);
      client.off('message', handleNewMessage);
      client.off('onlineUsers', handleOnlineUsers);
      client.disconnect();
    };
  }, []);

  // Keep the newest message in view (without scrolling the page itself)
  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [messages, showChat]);

  const openChat = () => {
    setShowChat(true);
    focusSoon(inputRef);
  };

  const minimizeChat = () => {
    setShowChat(false);
    focusSoon(openButtonRef);
  };

  const closeChat = () => {
    setShowClose(true);
    focusSoon(bubbleRef);
  };

  const reopenChat = () => {
    setShowClose(false);
    focusSoon(showChat ? inputRef : openButtonRef);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    const text = mes.trim();
    if (!text) {
      return;
    }
    socket.current.emit('message', text);
    setMes('');
  };

  // `compact`: on phones show only the dot, so the collapsed button doesn't cover page text
  const renderStatus = (compact) => (
    <span className="flex items-center gap-1.5 text-xs text-muted">
      <span className={`h-2 w-2 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-amber-500'}`} aria-hidden="true" />
      <span className={compact ? 'sr-only sm:not-sr-only' : undefined}>
        {isConnected ? `${onlineUsers ?? 1} online` : 'Connecting'}
      </span>
    </span>
  );

  if (showClose) {
    return (
      <button
        ref={bubbleRef}
        type="button"
        onClick={reopenChat}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-canvas text-fg shadow-lg transition-colors hover:bg-surface"
      >
        <ChatIcon />
      </button>
    );
  }

  if (!showChat) {
    return (
      <button
        ref={openButtonRef}
        type="button"
        onClick={openChat}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full border border-line bg-canvas p-3 text-sm font-medium text-fg shadow-lg transition-colors hover:bg-surface sm:px-4 sm:py-2.5"
      >
        <ChatIcon className="h-5 w-5 sm:h-4 sm:w-4" />
        <span className="sr-only sm:not-sr-only">Chat</span>
        {renderStatus(true)}
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex h-[26rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-line bg-canvas shadow-xl">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-fg">Chat</span>
          {renderStatus(false)}
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={minimizeChat} aria-label="Minimize chat" className={iconButtonClassName}>
            <MinusIcon className="h-4 w-4" />
          </button>
          <button type="button" onClick={closeChat} aria-label="Close chat" className={iconButtonClassName}>
            <CloseIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div ref={logRef} role="log" aria-label="Chat messages" className="flex-1 space-y-2 overflow-y-auto px-4 py-3">
        {messages.map((message, index) => (
          <p key={index} className="ml-auto w-fit max-w-[85%] break-words rounded-lg bg-surface px-3 py-2 text-sm text-fg">
            {message}
          </p>
        ))}
      </div>
      <form className="flex items-center gap-2 border-t border-line p-3" onSubmit={sendMessage}>
        <label htmlFor={inputId} className="sr-only">Message</label>
        <input
          id={inputId}
          ref={inputRef}
          type="text"
          value={mes}
          maxLength={MAX_MESSAGE_LENGTH}
          autoComplete="off"
          placeholder="Write a message"
          onChange={(e) => setMes(e.target.value)}
          className="min-w-0 flex-1 rounded-md border border-line bg-canvas px-3 py-2 text-sm text-fg placeholder:text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-fg text-canvas transition-opacity hover:opacity-90"
        >
          <SendIcon className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}

export default Chatbox;
