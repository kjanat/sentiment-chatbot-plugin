describe('Chatbot functionality', () => {
    it('should respond with a greeting', () => {
        const response = chatbot.getResponse('Hello');
        expect(response).toBe('Hi there!');
    });

    it('should respond with a farewell', () => {
        const response = chatbot.getResponse('Goodbye');
        expect(response).toBe('See you later!');
    });

    it('should handle unknown input', () => {
        const response = chatbot.getResponse('What is your name?');
        expect(response).toBe('I am a chatbot.');
    });
});