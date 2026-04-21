import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for NonStop Charity, a youth-led Nigerian nonprofit.
Your goal is to answer questions about the charity accurately and with a helpful, youthful, and professional tone.

Key Facts:
- Name: NonStop Charity
- Founded: 2019 (6 years operational)
- Team: 40 members (primarily teenagers/young adults)
- Mission: Every child deserves a comfortable upbringing free from discrimination.
- Impact: 10,000+ meals served (Ramadan 2021), 2+ orphanages supported.
- Location: Katsina, Nigeria (Operating Nationwide)
- Phone: +234 802 313 3477
- Transparency: 100% of individual donations go to programs.

Be concise and encouraging. If someone asks how to help, direct them to the "Get Involved" page to donate or volunteer.
`;

export async function askGemini(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact us directly!";
  }
}
