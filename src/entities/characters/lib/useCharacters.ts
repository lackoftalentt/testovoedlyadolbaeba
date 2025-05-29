import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from '../api/charactersApi';
import { usePagesStore } from '@/feature/pagination';

export const useCharacters = () => {
    const { currentUrl } = usePagesStore();
    const queryUrl = currentUrl;

    return useQuery({
        queryKey: ['characters', queryUrl],
        queryFn: () => fetchCharacters(queryUrl),
        staleTime: 5 * 60 * 1000,
        enabled: !!queryUrl
    });
}; 