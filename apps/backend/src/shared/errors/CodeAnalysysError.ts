export class CodeAnalysisError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "CodeAnalysisError";
    this.status = status;
  }
}
