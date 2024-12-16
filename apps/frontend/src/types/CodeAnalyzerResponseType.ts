export type CodeAnalyzerResponse = {
  originalCode: string;
  explanation: string;
  refactoredCode: string;
  reasoning: string[];
};
