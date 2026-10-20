import { Component } from "react";

// Keeps one failing part of the page (no WebGL, a bad chat payload, a failed chunk load)
// from unmounting everything else. Renders `fallback` (default: nothing) instead.
class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? (this.props.fallback ?? null) : this.props.children;
  }
}

export default ErrorBoundary;
