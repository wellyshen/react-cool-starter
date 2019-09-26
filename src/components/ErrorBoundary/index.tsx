import React, { PureComponent } from 'react';

type Props = {
  children?: React.ReactNode;
};
type State = {
  error: Error | null;
  errorInfo: { componentStack: string } | null;
};

export default class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    // Catch errors in any components below and re-render with error message
    this.setState({ error, errorInfo });

    // You can also log error messages to an error reporting service here
  }

  render() {
    const { children } = this.props;
    const { errorInfo, error } = this.state;

    // If there's an error, render error path
    return errorInfo ? (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          {error && error.toString()}
          <br />
          {errorInfo.componentStack}
        </details>
      </div>
    ) : (
      children || null
    );
  }
}
