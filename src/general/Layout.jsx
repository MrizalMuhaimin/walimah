import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";

export const Layout = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} >
      <div className="max-w-screen-sm bg-danger600">{children}</div>
    </ErrorBoundary>
  );
};
