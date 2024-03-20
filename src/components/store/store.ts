import { configureStore } from "@reduxjs/toolkit";
import newPlayerSlice from "../pages/startGame/slice/newPlayerSlice";

const store = configureStore({
   reducer:{
      newPlayerSlice
   }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch