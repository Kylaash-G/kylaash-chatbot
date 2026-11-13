const chatbotData = [
  { keywords: ["hi", "hello", "hey", "greetings"], response: "Hello 👋 How can I help you today?" },
  { keywords: ["how are you", "how are u"], response: "I'm doing great, thanks for asking! 😊" },
  { keywords: ["your name", "who are you"], response: "I'm Kylaash's Chatbot 🤖" },
  { keywords: ["who made you", "creator"], response: "I was created as a smart demo chatbot project by Kylaash." },
  { keywords: ["what can you do", "features"], response: "I can answer basic questions, tell you the time, and chat with you!" },
  { keywords: ["help", "support"], response: "Try asking about me, greetings, or the current time/date." },
  { keywords: ["time", "current time"], response: () => "The current time is " + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) },
  { keywords: ["date", "today"], response: () => "Today is " + new Date().toLocaleDateString(undefined, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}) },
  { keywords: ["bye", "goodbye", "cya"], response: "Goodbye! Have a fantastic day 👋" },
  { keywords: ["thanks", "thank you", "thx"], response: "You're very welcome! 😊" }
];
