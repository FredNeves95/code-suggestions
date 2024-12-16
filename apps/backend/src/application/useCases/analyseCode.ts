import { CodeAnalysis } from "../../domain/models/codeAnalysis";
import { CodeAnalyzer } from "../../domain/services/codeAnalyzer";
import { CodeAnalysisError } from "../../shared/errors/CodeAnalysysError";

export class AnalyzeCode {
  constructor(private codeAnalyzer: CodeAnalyzer) {}

  async execute(code: string): Promise<CodeAnalysis | null> {
    if (!this.isValidCode(code))
      throw new CodeAnalysisError(
        "Invalid code provided. Please ensure the code is a non-empty string.",
        400
      );
    const analysis = await this.codeAnalyzer.analyzeCode(code);
    return analysis;
  }

  private isValidCode(code: string): boolean {
    return typeof code === "string" && code.trim().length > 0;
  }
}
