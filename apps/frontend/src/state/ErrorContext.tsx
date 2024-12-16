import { createContext, useState, ReactNode } from 'react';
import { ErrorContextType } from '@/types/ErrorContextType';
import ErrorAlert from '@/components/ErrorAlert';

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const ErrorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  const showError = (message: string) => {
    setError(message);
    setTimeout(() => setError(null), 5000);
  };

  return (
    <ErrorContext.Provider value={{ showError }}>
      {children}
      {error && <ErrorAlert message={error} />}
    </ErrorContext.Provider>
  );
};

export default ErrorContext;
