export class CodeAnalysis {
  constructor(
    public originalCode: string,
    public explanation: string,
    public refactoredCode: string,
    public reasoning: string[]
  ) {}
}
