// filepath: src/sentiment.js
import Sentiment from "sentiment"; // Import the Sentiment class using ES modules
const sentiment = new Sentiment(); // Create an instance of Sentiment

export function analyzeSentiment(text) {
  const result = sentiment.analyze(text); // Use the instance to analyze text
  return result.score; // Return the sentiment score
}

export const sentimentScore = (text) => {
  if (!text) {
    return 0; // Return 0 for empty input
  }
  const score = analyzeSentiment(text); // Call the analyzeSentiment function
  return score; // Return the sentiment score
};
