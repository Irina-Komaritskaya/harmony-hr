import { create } from 'zustand';

export const useUserStore = create((set) => ({
    user_id: 0,
    setUser: (id_user) =>
        set(() => ({ user_id: id_user})),
    removeAllBears: () => set({ bears: 0 }),
    updateBears: (newBears) => set({ bears: newBears }),
}));