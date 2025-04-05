const { getResponse } = require('../src/chatbot');

describe('Chatbot Response', () => {
    test('returns "Hi there!" when input contains "hello"', () => {
        expect(getResponse("Hello")).toBe("Hi there!");
        expect(getResponse("Hey, hello everyone")).toBe("Hi there!");
    });

    test('returns "See you later!" when input contains "goodbye"', () => {
        expect(getResponse("Goodbye")).toBe("See you later!");
        expect(getResponse("time to say goodbye")).toBe("See you later!");
    });

    test('returns "I am a chatbot." for other input', () => {
        expect(getResponse("How are you?")).toBe("I am a chatbot.");
        expect(getResponse("Random text")).toBe("I am a chatbot.");
    });
});
