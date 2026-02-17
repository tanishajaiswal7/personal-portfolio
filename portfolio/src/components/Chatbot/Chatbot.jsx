import React, { useState } from 'react';
import ChatbotKit from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import { config } from './chatbotConfig';
import { ActionProvider } from './ActionProvider';
import MessageParser from './MessageParser';
import { FaTimes } from 'react-icons/fa';
import './Chatbot.css';

const Chatbot = () => {
  const [showBot, setShowBot] = useState(false);

  return (
    <div className="chatbot-wrapper">
      {/* Floating Icon */}
      <button className="chatbot-toggle-button" onClick={() => setShowBot(!showBot)}>
        💬
      </button>

      {/* Chatbot Window */}
      {showBot && (
        <div className="chatbot-box">
          <button className="chatbot-close-button" onClick={() => setShowBot(false)}>
            <FaTimes />
          </button>
          <ChatbotKit 
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
