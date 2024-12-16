export interface AIResponse {
  explanation: string;
  refactoredCode: string;
  reasoning: string[];
  hasError: boolean;
  httpStatus: number;
  errorMessage: string;
}
