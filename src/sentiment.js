// filepath: src/sentiment.js
import Sentiment from 'sentiment'; // Import the Sentiment class using ES modules
const sentiment = new Sentiment(); // Create an instance of Sentiment

function analyzeSentiment(text) {
    const result = sentiment.analyze(text); // Use the instance to analyze text
    return result.score; // Return the sentiment score
}

export default analyzeSentiment; // Export the analyzeSentiment function using ES modules
