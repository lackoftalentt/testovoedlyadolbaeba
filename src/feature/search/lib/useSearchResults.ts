import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../api/searchApi";

export const useSearchResults = (query: string) => {
  return useQuery({
      queryKey: ['search', query],
      queryFn: () => fetchSearch(query),
      staleTime: 5 * 60 * 1000,
      enabled: !!query
  });
}