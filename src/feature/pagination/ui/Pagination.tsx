import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import { usePagesStore } from "../modal/pagesStore";
import { useCharacters } from "@/entities/characters";
import { extractPageNumber } from "../lib/extractPageNumber";

export const Pagination = () => {
  const { currentUrl, setUrl } = usePagesStore();
  const { data } = useCharacters(currentUrl);

  const currentPage = extractPageNumber(currentUrl);
  const nextUrl = data?.next ?? null;
  const prevUrl = data?.previous ?? null;

  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    url: string | null
  ) => {
    e.preventDefault();
    if (url) setUrl(url);
  };

  return (
    <PaginationComponent className="mx-auto w-full justify-center">
      <PaginationContent>
        <PaginationItem className="cursor-pointer">
          <PaginationPrevious
            className="bg-white text-black hover:bg-white/80 w-25 justify-between"
            size="default"
            onClick={(e) => handlePageChange(e, prevUrl)}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            className="bg-white text-black"
            size="default"
            onClick={(e) => e.preventDefault()}
            isActive
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem className="cursor-pointer">
          <PaginationNext
            className="bg-white text-black hover:bg-white/80 w-25 justify-between"
            size="default"
            onClick={(e) => handlePageChange(e, nextUrl)}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};
