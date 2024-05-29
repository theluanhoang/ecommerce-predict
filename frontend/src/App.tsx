import { Router } from "./router";
import { Suspense } from "react";
import { LoadingScreen } from "@components/common/loading-screen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingScreen />}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
