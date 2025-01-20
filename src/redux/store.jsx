import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "./slice/Game"; // Use the default export

export const store = configureStore({
  reducer: {
    smallgame: GameReducer, // Use the reducer from the Game slice
  },
});
