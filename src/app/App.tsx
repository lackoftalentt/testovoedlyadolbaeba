import { HomePage } from "@/pages/home";
import { PersonModal } from "@/entities/person/modal";
import { SearchResultsPage } from "@/pages/search-results";
import { Separator } from "@radix-ui/react-separator";
import { QueryClientProvider } from "@tanstack/react-query";
import { Header } from "@/widgets/header/ui/Header";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { queryClient } from "@/shared/api/query-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SkeletonTheme } from "react-loading-skeleton";

const AppRoutes = () => (
  <Routes>
    <Route path="/characters" element={<HomePage />}>
      <Route path=":id" element={<PersonModal />} />
    </Route>

    <Route path="/search" element={<SearchResultsPage />}>
      <Route path=":id" element={<PersonModal />} />
    </Route>

    <Route path="*" element={<Navigate to="/characters" replace />} />
  </Routes>
);

export const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Separator className="bg-white h-0.5 my-3" />
        <div className="mx-auto">
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <AppRoutes />
          </SkeletonTheme>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  );
};
