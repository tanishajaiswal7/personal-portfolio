
// This is importing a function called createChatBotMessage from the react-chatbot-kit library.
// This function helps us create messages that the bot sends.
import { createChatBotMessage } from 'react-chatbot-kit';

export const config = {

  botName: "TanishaBot",

  initialMessages: [
    createChatBotMessage("Hi! I'm TanishaBot. Ask me anything about Tanisha!"),
    createChatBotMessage("Tell me how I help you?"),
  ],

};
