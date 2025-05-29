import { create } from 'zustand';

interface IModalStore {
    modalIsOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    personUrl: string;
    setPersonUrl: (url: string) => void;
}

export const useModalStore = create<IModalStore>(set => ({
    modalIsOpen: false,
    openModal: () => set({ modalIsOpen: true }),
    closeModal: () => set({ modalIsOpen: false }),
    personUrl: '',
    setPersonUrl: (url: string) => set({ personUrl: url })
}));
