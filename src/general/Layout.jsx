import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="min-w-[320px] max-w-[480px] bg-danger600">{children}</div>
    </ErrorBoundary>
  );
};
