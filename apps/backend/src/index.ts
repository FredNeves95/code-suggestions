// src/server/index.ts
import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { AIService } from "./infrastructure/externalApis/AiService";
import { AnalyzeCode } from "./application/useCases/analyseCode";
import { CodeAnalysisController } from "./infrastructure/controllers/CodeAnalyzeController";
import { CodeAnalyzer } from "./domain/services/codeAnalyzer";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const aiService = new AIService();
const codeAnalyser = new CodeAnalyzer(aiService);
const analyzeCodeUseCase = new AnalyzeCode(codeAnalyser);
const codeAnalysisController = new CodeAnalysisController(analyzeCodeUseCase);

// Roteamento
app.post("/api/analyze-code", (req: Request, res: Response) => {
  codeAnalysisController.analyzeCode(req, res);
});

// Iniciar o servidor
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
