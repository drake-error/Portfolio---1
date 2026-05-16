import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";
import ErrorBoundary from "./components/utils/ErrorBoundary";

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <LoadingProvider>
          <Suspense fallback={<div style={{ background: "#0b080c", height: "100vh" }} />}>
            <MainContainer>
              <Suspense fallback={null}>
                <CharacterModel />
              </Suspense>
            </MainContainer>
          </Suspense>
        </LoadingProvider>
      </ErrorBoundary>
    </>
  );
};

export default App;
