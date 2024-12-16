import ErrorContext from '@/state/ErrorContext';
import { ErrorContextType } from '@/types/ErrorContextType';
import { useContext } from 'react';

export const useError = (): ErrorContextType => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error('useError must be used within an ErrorProvider');
  }
  return context;
};
