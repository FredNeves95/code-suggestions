import { CodeAnalyzerResponse } from '@/types/CodeAnalyzerResponseType';
import axios from 'axios';

export const analyzeCode = async (
  code: string
): Promise<CodeAnalyzerResponse | void> => {
  const res = await axios.post('http://localhost:5001/api/analyze-code', {
    code,
  });
  const codeAnalyzed: CodeAnalyzerResponse = res.data;
  return codeAnalyzed;
};
