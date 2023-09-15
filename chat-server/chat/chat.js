document.addEventListener("DOMContentLoaded", function () {
  const chatMessages = document.getElementById("chat-messages");
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-button");
  const emojiButton = document.getElementById("emoji-button");
  const thumbsUpButton = document.getElementById("thumbs-up-button");

  // Event listener for sending a message when the "Enter" key is pressed
  messageInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault(); 
          sendMessage();
      }
  });

  // Event listener for sending a message when the "Send" button is clicked
  sendButton.addEventListener("click", function () {
      sendMessage();
  });

  // Simulate a response from the bot after a delay (1 second in this case)
  function simulateBotResponse(userMessage) {
      setTimeout(() => {
          const botMessage = {
              text: getBotResponse(userMessage.text),
              timestamp: new Date().toISOString(),
              isUser: false 
          };


          if (!containsOnlyEmojis(userMessage.text)) {
              displayMessage(botMessage);
          }
      }, 1000);
  }

  function sendMessage() {
      const messageText = messageInput.value;
      if (messageText.trim() === "") return;

      const userMessage = {
          text: messageText,
          timestamp: new Date().toISOString(),
          isUser: true 
      };


      displayMessage(userMessage);


      messageInput.value = "";


      simulateBotResponse(userMessage);
  }


  function containsOnlyEmojis(text) {
      const emojiPattern = /^[\uD800-\uDFFF]+$/;
      return emojiPattern.test(text);
  }

  function addEmoji(emoji) {
      messageInput.value += emoji;
  }


  function getBotResponse(userInput) {

      const lowerUserInput = userInput.toLowerCase();


      if (lowerUserInput.includes("hello") || lowerUserInput.includes("hi")) {
          return "Hello! How can I assist you today?";
      } else if (lowerUserInput.includes("help") || lowerUserInput.includes("helpi")) {
          return "How would you like me to help you?";
      } else if (lowerUserInput.includes("find information about")) {

          const findInfoIndex = lowerUserInput.indexOf("find information about");
          if (findInfoIndex !== -1) {
              const userQuery = lowerUserInput.substring(findInfoIndex + "find information about".length).trim();
              return `I would suggest using Wikipedia to find information about ${userQuery}.`;
          } else {
              return "I'm not sure how to interpret your request. Please specify what you want to know.";
          }
      } else {
          
          return "I'm not sure how to respond to that. Can you please clarify?";
      }
      
  }

  // Function to display a message in the chat
  function displayMessage(message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", message.isUser ? "sent" : "received");

      // Add the avatar element only for user messages and bot responses
      if (message.isUser || !message.isUser) {
          const avatarElement = document.createElement("div");
          avatarElement.classList.add("message-avatar");
          const avatarImage = document.createElement("img");
          avatarImage.src = message.isUser ? "pictures/user-avatar.png" : "pictures/bot-avatar.png"; // Use the appropriate avatar image
          avatarImage.alt = message.isUser ? "User" : "Bot";

          // Adjust the width and height of the avatarImage
          avatarImage.style.width = "24px"; 
          avatarImage.style.height = "24px"; 

          avatarElement.appendChild(avatarImage);

          messageElement.appendChild(avatarElement);
      }

      // Add the text content
      const contentElement = document.createElement("div");
      contentElement.classList.add("message-content");
      contentElement.innerHTML = message.text; 
      messageElement.appendChild(contentElement);

      chatMessages.appendChild(messageElement);
  }


  thumbsUpButton.addEventListener('click', () => {
      addEmoji('👍');
  });

  
  emojiButton.addEventListener('click', () => {
      emojiPickerContainer.style.display = emojiPickerContainer.style.display === 'none' ? 'block' : 'none';
  });
});

