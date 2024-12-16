import { Request, Response } from "express";
import { AnalyzeCode } from "../../application/useCases/analyseCode";
import { CodeAnalysisError } from "../../shared/errors/CodeAnalysysError";

export class CodeAnalysisController {
  private analyzeCodeUseCase: AnalyzeCode;

  constructor(analyzeCodeUseCase: AnalyzeCode) {
    this.analyzeCodeUseCase = analyzeCodeUseCase;
  }

  public async analyzeCode(req: Request, res: Response) {
    try {
      const { code } = req.body;

      if (!code) {
        throw new Error("Code is required.");
      }

      const analysis = await this.analyzeCodeUseCase.execute(code);
      return res.json(analysis);
    } catch (error) {
      if (error instanceof CodeAnalysisError) {
        return res.status(error.status).json({
          message: error.message,
        });
      }
      return res.status(500).json({
        message: "An unknown error occurred.",
      });
    }
  }
}
