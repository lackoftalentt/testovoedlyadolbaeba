import { Pagination } from "@/feature/pagination";
import { useCharacters } from "@/entities/characters/lib/useCharacters";
import { CharactersList } from "@/widgets/characters-list/ui/CharactersList";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  const { data, isLoading } = useCharacters();
  const characters = data?.results ?? [];

  return (
    <main className="px-6">
      <CharactersList
        title="Characters"
        characters={characters}
        isLoading={isLoading}
      />
      <Pagination />
      <Outlet />
    </main>
  );
};
