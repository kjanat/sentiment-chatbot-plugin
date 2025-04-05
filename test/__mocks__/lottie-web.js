// filepath: test/__mocks__/lottie-web.js
export default {
  loadAnimation: jest.fn(() => ({
    play: jest.fn(),
    stop: jest.fn(),
  })),
};
