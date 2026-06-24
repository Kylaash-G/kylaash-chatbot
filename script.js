function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim().toLowerCase();

  if (!msg) return;

  addMessage(msg, "user");

  input.value = "";

  showTyping();

  setTimeout(() => {
    hideTyping();
    let reply = getResponse(msg);
    addMessage(reply, "bot");
  }, 700);
}

function addMessage(text, sender) {
  const messages = document.getElementById("messages");

  const div = document.createElement("div");
  div.className = "message " + sender;
  div.innerText = text;

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(input) {
  for (let item of chatbotData) {
    for (let key of item.keywords) {
      if (input.includes(key)) {
        return typeof item.response === "function"
          ? item.response()
          : item.response;
      }
    }
  }

  // fallback smart replies
  if (input.includes("what") || input.includes("why"))
    return "That's an interesting question! 🤔";

  if (input.includes("can you"))
    return "Yes, I can try to help you with that!";

  return "Sorry, I didn't understand that 😅";
}

function showTyping() {
  document.getElementById("typing").style.display = "block";
}

function hideTyping() {
  document.getElementById("typing").style.display = "none";
}

document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});