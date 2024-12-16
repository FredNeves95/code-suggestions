import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import hljs from 'highlight.js';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import TertiaryTitle from './TertiaryTitle';

type CodePreviewProps = {
  code?: string;
  title: string;
};

function CodePreview({ code, title }: CodePreviewProps) {
  if (!code) return;
  const preferredLanguages = ['java', 'javascript', 'python', 'typescript'];
  const language = hljs.highlightAuto(code, preferredLanguages).language;

  return (
    <div className="text-white p-4 overflow-auto bg-gray-700">
      <TertiaryTitle>
        {title} - {language}
      </TertiaryTitle>
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers
        wrapLongLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodePreview;
