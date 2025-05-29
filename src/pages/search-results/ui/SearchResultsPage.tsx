import { useFilteredData } from "@/shared/lib/hooks/useFilteredData";
import { usePagesStore } from "@/feature/pagination";
import { CharactersList } from "@/widgets/characters-list";
import { Outlet } from "react-router-dom";

import type { PersonDetail } from "@/entities/person/modal";
import { useSearchResults, useSearchStore } from "@/feature/search";

export const SearchResultsPage = () => {
  const { query } = useSearchStore();

  const { data, isLoading, isError } = useSearchResults(query);
  const { genderFilter } = usePagesStore();

  const filteredCharacters = useFilteredData<PersonDetail>({
    data: data?.result,
    filterValue: genderFilter,
    filterKey: "properties.gender",
  });

  if (isError) return <div>Error loading results</div>;

  return (
    <div className="px-6">
      <CharactersList
        characters={filteredCharacters}
        isLoading={isLoading}
        hasFiltration
      />
      <Outlet />
    </div>
  );
};
