import { create } from 'zustand';

interface PagesState {
    currentUrl: string;
    genderFilter: string;
    setUrl: (url: string) => void;
    setGenderFilter: (gender: string) => void;
}

export const usePagesStore = create<PagesState>(set => ({
    currentUrl: 'https://swapi.tech/api/people/',
    genderFilter: '',
    setUrl: url => set({ currentUrl: url }),
    setGenderFilter: gender => set({ genderFilter: gender })
}));
