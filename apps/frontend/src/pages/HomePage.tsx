import { useState } from 'react';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';
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
      setCodeAnalisys(response);
    } catch (error) {
      showError(getErrorMessage(error));
    } finally {
      setCode('');
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 h-full w-full flex flex-col">
      <Header>AI Accelerator Test - Plank</Header>
      <div className="h-4/5 self-center w-full sm:w-4/5 mt-4 overflow-auto custom-scrollbar mb-6">
        {codeAnalysis && (
          <div className="w-full flex flex-col gap-6">
            <Explanation>{codeAnalysis?.explanation}</Explanation>
            <Reasoning reasons={codeAnalysis?.reasoning} />
            <div className="flex gap-4 flex-wrap justify-center">
              <CodePreview
                title="Original Code"
                code={codeAnalysis?.originalCode}
              />
              <CodePreview
                title="Refactored Code"
                code={codeAnalysis?.refactoredCode}
              />
            </div>
          </div>
        )}
      </div>
      <hr />
      <div className="p-4 w-full sm:w-3/5 self-center">
        <div className="relative">
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            disabled={isLoading}
            placeholder="Enter your code here..."
            className="min-h-32 w-full resize-none rounded-sm bg-gray-950 px-4 py-3 text-white placeholder-gray-500 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:outline-none border border-gray-300 shadow-sm custom-scrollbar"
            style={{ lineHeight: '1.5' }}
          />
          <Button
            onClick={handleClick}
            variant="outline"
            disabled={isLoading}
            className="absolute bottom-3 right-3 bg-gray-950 hover:bg-gray-500 text-white rounded-lg px-3 py-1"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : '➤'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
