import { create } from 'zustand';

import { MapState } from './types/MapState';

export const useMapStore = create<MapState>()((set) => ({
  searchValue: '',
  setSearchValue: (query) => set(() => ({ searchValue: query })),
}));
