// Chatbot Toggle Button Logic
document.getElementById("chatbot-toggle").addEventListener("click", () => {
    const chatbotBox = document.getElementById("chatbot-box");
    chatbotBox.style.display = chatbotBox.style.display === "none" ? "block" : "none";
});

// Chatbot Send Button Logic
document.getElementById("chatbot-send").addEventListener("click", handleUserInput);

// Handle User Input
function handleUserInput() {
    const userInput = document.getElementById("chatbot-input").value.trim();
    if (!userInput) return;

    // Display User Message
    displayMessage(userInput, "user");

    // Generate Chatbot Response
    const botResponse = generateBotResponse(userInput);
    displayMessage(botResponse, "bot");

    // Clear Input
    document.getElementById("chatbot-input").value = "";
}

// Generate Chatbot Response
function generateBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("website") || lowerCaseMessage.includes("free")) {
        return "Yes! I can create a website for you for free. Can you provide your name, email, and a brief description of the website you'd like?";
    } else if (lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hello")) {
        return "Hello! How can I help you today?";
    } else {
        return "I'm here to help. Ask me about creating a free website!";
    }
}

// Display Message in Chatbot
function displayMessage(message, sender) {
    const messagesContainer = document.getElementById("chatbot-messages");

    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.margin = "5px";
    messageDiv.style.padding = "8px";
    messageDiv.style.borderRadius = "10px";

    if (sender === "user") {
        messageDiv.style.backgroundColor = "#0078d7";
        messageDiv.style.color = "white";
        messageDiv.style.textAlign = "right";
    } else {
        messageDiv.style.backgroundColor = "#f1f1f1";
        messageDiv.style.color = "black";
        messageDiv.style.textAlign = "left";
    }

    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll to the latest message
}