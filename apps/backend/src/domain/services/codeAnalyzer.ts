import { AIService } from "../../infrastructure/externalApis/AiService";
import { CodeAnalysis } from "../models/codeAnalysis";

export class CodeAnalyzer {
  constructor(private AIService: AIService) {}

  async analyzeCode(code: string): Promise<CodeAnalysis | null> {
    const response = await this.AIService.analyzeCodeWithOpenAI(code);
    if (!response || response === null) return null;
    return new CodeAnalysis(
      code,
      response.explanation,
      response.refactoredCode,
      response.reasoning
    );
  }
}
