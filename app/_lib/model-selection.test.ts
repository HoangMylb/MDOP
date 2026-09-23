import { describe, expect, it } from "vitest";
import { MAX_COMPARE_MODELS, sanitizeStoredModels, toggleComparison } from "./model-selection";

describe("sanitizeStoredModels", () => {
  it("keeps known model names, removes duplicates, and enforces a limit", () => {
    expect(sanitizeStoredModels(["911", "Macan", "911", "Unknown", 7], 2)).toEqual(["911", "Macan"]);
  });

  it("recovers safely from malformed persisted data", () => {
    expect(sanitizeStoredModels({ models: ["911"] }, MAX_COMPARE_MODELS)).toEqual([]);
  });
});

describe("toggleComparison", () => {
  it("adds and removes a selected vehicle", () => {
    expect(toggleComparison(["911"], "Taycan")).toEqual({ models: ["911", "Taycan"], outcome: "added" });
    expect(toggleComparison(["911", "Taycan"], "911")).toEqual({ models: ["Taycan"], outcome: "removed" });
  });

  it("keeps the existing selection when the comparison limit is reached", () => {
    const selected = ["911", "Taycan", "Macan"];
    expect(toggleComparison(selected, "Cayenne")).toEqual({ models: selected, outcome: "limit-reached" });
  });
});
