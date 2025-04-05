(function () {
    let analyzeSentiment;
    if (typeof require === 'function') {
        analyzeSentiment = require('./sentiment');
    } else {
        analyzeSentiment = window.analyzeSentiment;
    }

    // Helper function for generating a chatbot response based on input.
    function getResponse(userMessage) {
        const lowerCaseInput = userMessage.toLowerCase();
        if (lowerCaseInput.includes('hello')) {
            return "Hi there!";
        } else if (lowerCaseInput.includes('goodbye')) {
            return "See you later!";
        } else {
            return "I am a chatbot.";
        }
    }

    // Initialization or state variables
    const userInputEl = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const chatBubbleEl = document.getElementById('chat-bubble');
    const animationEl = document.getElementById('animation-placeholder');

    // Only add event listener if elements exist (i.e. we're in the browser)
    if (sendBtn && userInputEl && chatBubbleEl && animationEl) {
        sendBtn.addEventListener('click', () => {
            const userMessage = userInputEl.value.trim();
            if (!userMessage) return;
            
            const sentimentScore = analyzeSentiment(userMessage);
            if (sentimentScore > 0) {
                animationEl.textContent = "😊 [Happy Animation]";
            } else if (sentimentScore < 0) {
                animationEl.textContent = "😟 [Sad Animation]";
            } else {
                animationEl.textContent = "😐 [Neutral Animation]";
            }

            chatBubbleEl.textContent = getResponse(userMessage);
            userInputEl.value = "";
        });
    }

    // Export getResponse for tests
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = { getResponse };
    } else {
        window.getResponse = getResponse;
    }
})();
