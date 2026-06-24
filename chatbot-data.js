const chatbotData = [
  { keywords: ["hi", "hello", "hey"], response: "Hello 👋 How can I help you?" },
  { keywords: ["how are you"], response: "I'm doing great! 😊" },
  { keywords: ["your name"], response: "I'm Kylaash's Chatbot 🤖" },
  { keywords: ["who made you"], response: "I was created as a smart demo chatbot project." },
  { keywords: ["what can you do"], response: "I can answer basic questions and chat with you!" },
  { keywords: ["help"], response: "Try asking about me, greetings, or general questions." },
  { keywords: ["time"], response: () => "Current time is " + new Date().toLocaleTimeString() },
  { keywords: ["date"], response: () => "Today's date is " + new Date().toLocaleDateString() },
  { keywords: ["bye"], response: "Goodbye! Have a nice day 👋" },
  { keywords: ["thanks"], response: "You're welcome 😊" }
];