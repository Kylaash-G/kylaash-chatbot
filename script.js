const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");

function sendMessage() {
  const msg = input.value.trim();
  if (!msg) return;

  addMessage(msg, "user");
  input.value = "";
  
  showTyping();

  // Simulate network delay
  setTimeout(() => {
    hideTyping();
    const reply = getResponse(msg.toLowerCase());
    addMessage(reply, "bot");
  }, 800 + Math.random() * 400); // More natural delay
}

function addMessage(text, sender) {
  const messages = document.getElementById("messages");
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.innerText = text;

  messages.appendChild(div);
  scrollToBottom();
}

function getResponse(input) {
  // Remove special characters for accurate matching
  const cleanInput = input.replace(/[^a-zA-Z0-9 ]/g, '');
  
  for (let item of chatbotData) {
    for (let key of item.keywords) {
      // Use regex word boundary to prevent partial matches (e.g. 'this' matching 'hi')
      const regex = new RegExp(`\\b${key}\\b`, "i");
      if (regex.test(cleanInput)) {
        return typeof item.response === "function" ? item.response() : item.response;
      }
    }
  }

  // Fallback smart replies
  if (input.includes("what") || input.includes("why")) return "That's an interesting question! 🤔";
  if (input.includes("can you")) return "Yes, I can try to help you with that!";

  return "Sorry, I didn't understand that 😅 Could you rephrase?";
}

function showTyping() {
  const typingElement = document.getElementById("typing");
  typingElement.style.display = "block";
  chatbox.appendChild(typingElement); // Move indicator to bottom
  scrollToBottom();
}

function hideTyping() {
  document.getElementById("typing").style.display = "none";
}

function scrollToBottom() {
  chatbox.scrollTop = chatbox.scrollHeight;
}

input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});
