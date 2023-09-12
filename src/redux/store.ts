import { Person } from "@/models";
import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./slices/people.slice";
import favoriteSlice from "./slices/favorites.slice";

export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice,
    favorites: favoriteSlice,
  },
});
