import React, { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    const telegramApiUrl = `https://api.telegram.org/bot7786627147:AAGzmyutqOFCXmQqsza0s9TmuJCantc-r9w/sendMessage`;
    const chatId = "<CHAT_ID>"; // Replace with actual chat ID
    
    try {
      const res = await axios.post(telegramApiUrl, {
        chat_id: chatId,
        text: message,
      });
      setResponse("Message sent!");
    } catch (err) {
      setResponse("Error sending message");
    }
  };

  return (
    <div className="App">
      <h1>Telegram Web App</h1>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
      <p>{response}</p>
    </div>
  );
}

export default App;
