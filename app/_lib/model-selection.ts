export const MODEL_NAMES = ["911", "Taycan", "Macan", "Cayenne", "Panamera", "718"] as const;

export const MAX_COMPARE_MODELS = 3;

const knownModels = new Set<string>(MODEL_NAMES);

export function sanitizeStoredModels(value: unknown, maximum: number): string[] {
  if (!Array.isArray(value)) return [];

  return [...new Set(value.filter((model): model is string => typeof model === "string" && knownModels.has(model)))].slice(0, maximum);
}

export function toggleComparison(models: readonly string[], model: string): {
  models: string[];
  outcome: "added" | "removed" | "limit-reached";
} {
  if (models.includes(model)) {
    return { models: models.filter((item) => item !== model), outcome: "removed" };
  }

  if (models.length >= MAX_COMPARE_MODELS) {
    return { models: [...models], outcome: "limit-reached" };
  }

  return { models: [...models, model], outcome: "added" };
}
