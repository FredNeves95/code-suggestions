import { OpenAI } from "openai";
import { AIResponse } from "../../domain/models/aiResponse";
import { CodeAnalysisError } from "../../shared/errors/CodeAnalysysError";

export class AIService {
  private openAi: OpenAI;

  constructor() {
    this.openAi = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    });
  }

  async analyzeCodeWithOpenAI(code: string): Promise<AIResponse | null> {
    const response = await this.openAi.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            'You are a helpful assistant that analyzes code. For each input, do the following: \
            Format your response as a JSON object with the keys: "explanation", "refactoredCode", and "reasoning".\
            explanation: Provide an explanation of what the code does. \
            refactoredCode: Refactor the code to improve it. \
            reasoning: Provide a step-by-step reasoning of how the explanation was derived. It should be an array of strings, each item is a reason \
            If you are unable to analyze the code, or the code is not valid, respond with an JSON object with the property hasError, errorMessage and httpStatus to send to frontend.\
            Format your response as a JSON object within a code block. \
            Always encapsulate the JSON response in triple backticks (```json ... ```). \
            Example response: ```json { "explanation": "...", "refactoredCode": "...", "reasoning": ["..."] } ``` \
            If the input code is invalid, return: ```json { "hasError": true, "errorMessage": "...", "httpStatus": statusCode } ```.',
        },
        {
          role: "user",
          content: `Analyze this code:\n\n${code}`,
        },
      ],
      max_tokens: 800,
      temperature: 0.7,
    });

    const data = response?.choices[0]?.message?.content?.trim();
    if (!data) throw new CodeAnalysisError("No response from API", 500);
    if (response?.choices[0]?.finish_reason !== "stop")
      throw new CodeAnalysisError(
        "Code is too long, try cutting it into smaller snippets ",
        500
      );

    const jsonMatch = data.match(/```json([\s\S]*?)```/);
    if (!jsonMatch) {
      throw new CodeAnalysisError(
        "Response from API does not contain valid JSON format",
        500
      );
    }

    let parsedData: AIResponse;

    try {
      jsonMatch.forEach((json, index) => console.log(index, ": ", json));
      parsedData = JSON.parse(jsonMatch[1].trim());
    } catch {
      throw new CodeAnalysisError(
        "Failed to parse the response from OpenAI",
        500
      );
    }

    if (parsedData.hasError) {
      throw new CodeAnalysisError(
        parsedData.errorMessage,
        parsedData.httpStatus
      );
    }

    if (
      !parsedData.explanation ||
      !parsedData.refactoredCode ||
      !parsedData.reasoning
    ) {
      throw new CodeAnalysisError(
        "Incomplete response from OpenAI. Missing required fields.",
        500
      );
    }

    if (
      parsedData.explanation &&
      parsedData.refactoredCode &&
      parsedData.reasoning
    ) {
      return parsedData;
    }

    return null;
  }
}
