import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export type Player = {
  id: number | string;
  name: string;
}

type TypeinitialState = {
   players: Player[];
   error: boolean | string
}

const initialState:TypeinitialState = {
  players: [],
  error: false
}

const newPlayersSlice = createSlice({
  name: 'newPlayers',
  initialState,
  reducers: {
    addPlayers(state, action: PayloadAction<string>) {
      const findItem = state.players.find((item) => item.name === action.payload);

      if (!findItem) {
        state.players.push({
          id: new Date().toISOString(),
          name: action.payload,
        });
        state.error = ''; // Очищаем сообщение об ошибке при успешном добавлении
      
      } else {
       
        state.error = `Игрок с ником ${action.payload} уже существует`; // Более информативное сообщение об ошибке
      }
    
    },
   
  },
});

export const selectNewPlayers = createSelector(
   (state: { newPlayers: TypeinitialState }) => state.newPlayers.players,
   (newPlayers) => newPlayers
 );

export const { addPlayers, } = newPlayersSlice.actions;

export default newPlayersSlice.reducer;