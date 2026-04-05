import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getArchitecturalAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-pro-preview",
      contents: prompt,
      config: {
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.HIGH,
        },
        systemInstruction: "You are an expert architectural consultant for Tranquil Holdings. Provide deep, insightful, and technical advice on architecture, real estate investment, and construction. Your tone should be professional, sophisticated, and visionary.",
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error in thinking mode:", error);
    return "I'm sorry, I encountered an error while processing your complex request. Please try again.";
  }
}
