import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './index.css';
import { logError } from './utils/errorLogger';

class TopLevelErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logError(error);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page.</h1>;
    }

    return this.props.children;
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <TopLevelErrorBoundary>
      <App />
    </TopLevelErrorBoundary>
  </React.StrictMode>
);