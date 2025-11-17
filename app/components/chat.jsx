'use client';

import { useEffect } from 'react';
 
export default function ChatbotLoader() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://back.techrecto.com/api/chatbot/script.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
 
    script.onload = () => {
      window.ChatbotConfig = {
        flowId: "686ffe001ab040261e6c418d",
        userId: "686547c645cf8b6b8a7d157d",
        websiteDomain: "https://sharplogicians.com",
        position: "bottom-right",
        theme: {
          primary: "#7C3AED",
          secondary: "#F59E0B",
          background: "#FFFFFF",
          text: "#1F2937",
          buttonText: "#FFFFFF"
        }
      };
      setTimeout(() => {
        if (window.initChatbot) {
          window.initChatbot();
        }
      }, 300);
    };
 
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
 
  return null;
}
