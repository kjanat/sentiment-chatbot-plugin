const analyzeSentiment = require('../src/sentiment');

describe('Sentiment Analysis', () => {
    test('returns a positive score for a positive sentence', () => {
        const text = "I am feeling fantastic and amazing today!";
        expect(analyzeSentiment(text)).toBeGreaterThan(0);
    });

    test('returns a negative score for a negative sentence', () => {
        const text = "It is a terrible and horrible day.";
        expect(analyzeSentiment(text)).toBeLessThan(0);
    });

    test('returns 0 for a neutral sentence', () => {
        const text = "I went to the store to buy some milk.";
        expect(analyzeSentiment(text)).toBe(0);
    });
});
