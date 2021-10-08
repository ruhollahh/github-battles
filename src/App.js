import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// import { Popular } from './components/Popular';
import './App.css';
import { Battle } from './components/Battle';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export const App = () => {
  return (
    <div className="wrapper pt-2">
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <Battle />
      </ErrorBoundary>
    </div>
  );
};
