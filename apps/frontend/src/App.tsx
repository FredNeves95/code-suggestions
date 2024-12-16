import HomePage from './pages/HomePage';
import { ErrorProvider } from './state/ErrorContext';
function App() {
  return (
    <ErrorProvider>
      <HomePage />
    </ErrorProvider>
  );
}

export default App;
