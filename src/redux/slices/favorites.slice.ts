import { LocalStorageTypes, Person } from "@/models";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice, current } from "@reduxjs/toolkit";

const initialState: Person[] = [];

export const favoriteSlice = createSlice({
  name: LocalStorageTypes.FAVORITES,
  initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(LocalStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
      return action.payload;
    },
    removeFavorite: (state, action) => {
      const filterState = current(state).filter(
        (p: Person) => p.id !== action.payload.id
      );
      setLocalStorage(LocalStorageTypes.FAVORITES, filterState);
      return filterState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
