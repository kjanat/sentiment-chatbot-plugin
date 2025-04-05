import { sentimentScore } from "@src/sentiment.js";

describe("Sentiment Analysis", () => {
  it("should return a positive score for positive input", () => {
    const result = sentimentScore("I love this!");
    // 1 or higher is considered positive
    expect(result).toBeGreaterThanOrEqual(1);
  });

  it("should return a negative score for negative input", () => {
    const result = sentimentScore("I hate this!");
    expect(result).toBeLessThanOrEqual(-1);
  });

  it("should return zero for neutral input", () => {
    const result = sentimentScore("This is okay.");
    expect(result).toBe(0);
  });

  it("should handle empty input", () => {
    const result = sentimentScore("");
    expect(result).toBe(0);
  });
});
