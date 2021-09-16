import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient({
   defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 100,
    },
  }, 
});

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </QueryClientProvider>,
  document.getElementById("root")
);
