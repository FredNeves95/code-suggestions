import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';

type ErrorAlertProps = {
  message: string;
};

function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className="fixed top-4 right-4 z-50 max-w-md">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4 text-gray-950" />
        <AlertTitle className="font-bold">Error</AlertTitle>
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </div>
  );
}

export default ErrorAlert;
