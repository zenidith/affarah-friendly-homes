import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
  fallback?: ReactNode; // Optional custom fallback UI
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false });
    // Attempt to recover by navigating to the home page
    window.location.assign(window.location.origin);
  };

  public render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback || (
        <div className="flex flex-col items-center justify-center min-h-screen text-center p-4 bg-background text-foreground">
          <h2 className="text-2xl font-bold mb-4">Something went wrong.</h2>
          <p className="mb-6">We've logged the issue and are looking into it. Please try refreshing the page.</p>
          <Button onClick={this.handleReset}>
            Refresh Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
