import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getArchitecturalAdvice(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: "You are an expert architectural consultant for Tranquil Holdings. Provide deep, insightful, and technical advice on architecture, real estate investment, and construction. Your tone should be professional, sophisticated, and visionary."
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error in architectural advice:", error);
    return "I'm sorry, I encountered an error while processing your request. Please try again.";
  }
}
