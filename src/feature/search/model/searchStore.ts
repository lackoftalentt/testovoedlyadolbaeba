import type { PersonDetail } from '@/entities/person/modal';
import { create } from 'zustand';

interface SearchStore {
    searchList: PersonDetail[];
    setSearchList: (list: PersonDetail[]) => void;
    query: string;
    setQuery: (query: string) => void;
}

export const useSearchStore = create<SearchStore>(set => ({
    searchList: [],
    setSearchList: (list: PersonDetail[]) => set({ searchList: list }),
    query: "",
    setQuery: (query: string) => set({ query })
}));
