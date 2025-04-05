/**
 * analyzeSentiment(text) - Implements basic sentiment analysis by counting positive and negative words.
 * Returns a score: positive for positive sentiment, negative for negative sentiment, and 0 for neutral.
 */
function analyzeSentiment(text) {
    const positiveWords = [
        'happy', 'good', 'great', 'fantastic', 'excellent', 'amazing', 
        'joyful', 'positive', 'wonderful', 'delightful', 'cheerful', 'pleasant'
    ];
    const negativeWords = [
        'sad', 'bad', 'terrible', 'awful', 'horrible', 'worst', 
        'depressing', 'negative', 'dreadful', 'unpleasant', 'miserable', 'tragic'
    ];

    // Normalize text: convert to lower-case and remove punctuation.
    const words = text.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    let score = 0;

    words.forEach(word => {
        if (positiveWords.includes(word)) {
            score++;
        } else if (negativeWords.includes(word)) {
            score--;
        }
    });
    return score;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = analyzeSentiment;
} else {
    window.analyzeSentiment = analyzeSentiment;
}
