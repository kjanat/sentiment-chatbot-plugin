import lottie from "lottie-web";
import { analyzeSentiment } from '@src/sentiment.js';

(function () {
  // Log an error if analyzeSentiment is not defined
  if (typeof analyzeSentiment !== "function") {
    console.error(
      "analyzeSentiment is not defined. Ensure that sentiment.js is loaded before chatbot.js."
    );
  }

  // Helper function for generating a chatbot response based on input
  function getResponse(userMessage) {
    const lowerCaseInput = userMessage.toLowerCase();
    if (lowerCaseInput.includes("hello")) {
      return "Hi there!";
    } else if (lowerCaseInput.includes("goodbye")) {
      return "See you later!";
    } else {
      return "I am a chatbot.";
    }
  }

  // Function to load and play animations
  function playAnimation(animationPath) {
    const animationEl = document.getElementById("animation-placeholder");
    animationEl.innerHTML = ""; // Clear previous animation
    lottie.loadAnimation({
      container: animationEl,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: animationPath, // Path to the animation JSON file
    });
  }

  // Initialization or state variables
  const userInputEl = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const chatBubbleEl = document.getElementById("chat-bubble");
  const animationEl = document.getElementById("animation-placeholder");

  if (sendBtn && userInputEl && chatBubbleEl && animationEl) {
    sendBtn.addEventListener("click", () => {
      const userMessage = userInputEl.value.trim();
      if (!userMessage) { return; };

      const sentimentScore = analyzeSentiment(userMessage);
      if (sentimentScore > 0) {
        playAnimation("@lottiefiles/happy.json"); // Happy animation
        animationEl.textContent = "😊 [Happy Animation]";
      } else if (sentimentScore < 0) {
        playAnimation("@lottiefiles/sad.json"); // Sad animation
        animationEl.textContent = "😟 [Sad Animation]";
      } else {
        playAnimation("@lottiefiles/neutral.json"); // Neutral animation
        animationEl.textContent = "😐 [Neutral Animation]";
      }

      chatBubbleEl.textContent = getResponse(userMessage);
      userInputEl.value = "";
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { getResponse };
  } else {
    window.getResponse = getResponse;
  }
})();
