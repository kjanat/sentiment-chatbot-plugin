const helloWorld = () => 'Hello, World!';

test('returns expected output', () => {
    expect(helloWorld()).toBe('Hello, World!');
});
