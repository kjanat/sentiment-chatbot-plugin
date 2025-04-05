import { getResponse } from "@src/chatbot.js";

beforeEach(() => {
  document.body.innerHTML = `
    <div id="animation-placeholder"></div>
    <input id="user-input" />
    <button id="send-btn"></button>
    <div id="chat-bubble"></div>
  `;
});

test("getResponse returns correct response", () => {
  expect(getResponse("hello")).toBe("Hi there!");
  expect(getResponse("goodbye")).toBe("See you later!");
  expect(getResponse("random text")).toBe("I am a chatbot.");
});
