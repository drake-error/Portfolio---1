import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorType?: string;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Check if it's a chunk loading error (common in Vite production apps)
    if (error.name === "ChunkLoadError" || error.message.includes("Failed to fetch dynamically imported module")) {
      return { hasError: true, errorType: "chunk" };
    }
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.state.errorType === "chunk") {
        // Automatically reload for chunk errors if possible
        window.location.reload();
        return null;
      }

      return (
        <div style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b080c",
          color: "#eae5ec",
          fontFamily: "Geist, sans-serif",
          textAlign: "center",
          padding: "20px"
        }}>
          <h1>Something went wrong</h1>
          <p>The application encountered an unexpected error.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#c2a4ff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
