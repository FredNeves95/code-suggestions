import HomePage from './pages/HomePage';
import { ErrorProvider } from './state/ErrorContext';
function App() {
  return (
    <ErrorProvider>
      <div className="h-screen">
        <HomePage />
      </div>
    </ErrorProvider>
  );
}

export default App;
