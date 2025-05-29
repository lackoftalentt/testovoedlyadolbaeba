import { PersonCard } from "@/entities/person/card/ui/PersonCard";
import { Filtration } from "@/feature/filtration/ui/Filtration";
import type { PersonDetail, PersonSummary } from "@/types/swapi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchParams } from "react-router-dom";

export const CharactersList = ({
  characters,
  title,
  hasFiltration = false,
  isLoading,
}: CharactersListProps) => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const list =
    characters.length > 0 || !isLoading
      ? characters
      : Array.from({ length: 8 }, (_, index) => ({
          uid: `skeleton-${index}`,
          name: "",
          url: "",
        }));

  return (
    <>
      <div className="flex justify-between items-center my-4">
        <h1 className="text-white text-4xl font-bold">
          {query ? `Search Results for "${query}"` : title}
        </h1>
        {hasFiltration && <Filtration />}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {list.map((character) =>
          isLoading ? (
            <Skeleton key={character.uid} className="w-full h-9" />
          ) : (
            <PersonCard key={character.uid} person={character} />
          )
        )}
      </div>
    </>
  );
};

interface CharactersListProps {
  characters: PersonDetail[] | PersonSummary[];
  title?: string;
  hasFiltration?: boolean;
  isLoading?: boolean;
}
