import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import api from '../../Api/api';
import { Character } from '../../Models/Character';
import { RootState } from '../store';

export interface CharactersState {
  characters: Character [];
  status: 'idle' | 'loading' | 'failed';
  type: string,
  value: number;
}

const initialState: CharactersState = {
    characters: [],
    status: 'idle',
    type: '',
    value: 0
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getCharactersAsync = createAsyncThunk(
  'charactersState/getCharacters',
  async () => {
    const response = await api.get('/characters', {
        params: {
          limit: 20,
          offset: 0,
        },
      });
    return response.data.data.results;
  }
);

export const charactersSlice = createSlice({
    name: 'character',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        addCharacter: (state, action: PayloadAction<Character>) => {
            state.characters.push(action.payload);
        },
      
        // Use the PayloadAction type to declare the contents of `action.payload`
        removeCharacter: (state, action: PayloadAction<string>) => {
            debugger;
            state.characters = state.characters.filter(elm => elm.id != action.payload);
        },

        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },

    },

    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
        .addCase(getCharactersAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getCharactersAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state.characters = action.payload;
        })
        .addCase(getCharactersAsync.rejected, (state) => {
            state.status = 'failed';
        });
    },

  });

  export const { addCharacter, removeCharacter, incrementByAmount } = charactersSlice.actions;
  export const selectCharacters = (state: RootState) => state.characters.characters;
  export const getCharacter = (state: RootState, id:string) => state.characters.characters.find(character => character.id = id);

export default charactersSlice.reducer;
