import { useState } from 'react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
import { Label } from '@radix-ui/react-label';
import { useError } from '@/hooks/UseError';
import { CodeAnalyzerResponse } from '@/types/CodeAnalyzerResponseType';
import { analyzeCode } from '@/services/codeAnalyzerApi';
import { getErrorMessage } from '@/utils/functions';
import Explanation from '@/components/Explanation';
import CodePreview from '@/components/CodePreview';
import Reasoning from '@/components/Reasoning';

function HomePage() {
  const [code, setCode] = useState<string>('');
  const { showError } = useError();

  const [codeAnalysis, setCodeAnalisys] = useState<CodeAnalyzerResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    if (!code) return;

    setIsLoading(true);
    try {
      const response = await analyzeCode(code);
      if (!response) {
        throw new Error('Invalid response from server');
      }
      console.log(codeAnalysis);
      setCodeAnalisys(response);
    } catch (error) {
      showError(getErrorMessage(error));
    } finally {
      setCode('');
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <Header>AI Accelerator Test - Plank</Header>
      <Label htmlFor="input-code">Analyze your code</Label>
      <Textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        disabled={isLoading}
        placeholder="Enter your code here..."
        className="resize-none min-h-48 focus:border-blue-300"
        id="input-code"
      />
      <Button
        onClick={handleClick}
        variant="outline"
        disabled={isLoading}
        className="text-gray-950 self-start hover:bg-gray-300 hover:border-blue-300 active:bg-gray-500"
      >
        {isLoading ? <Loader2 className="animate-spin" /> : 'Send Code'}
      </Button>
      {codeAnalysis && (
        <>
          <Explanation>{codeAnalysis?.explanation}</Explanation>
          <CodePreview
            title="Original Code"
            code={codeAnalysis?.originalCode}
          />
          <hr />
          <Reasoning reasons={codeAnalysis?.reasoning} />
          <CodePreview
            title="Refactored Code"
            code={codeAnalysis?.refactoredCode}
          />
        </>
      )}
    </div>
  );
}

export default HomePage;
