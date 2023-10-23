import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../..";

// Define a type for the slice state
interface StoryPoints {
  value?: string;
  user: string;
  room: string;
  story: string;
}

// Define the initial state using that type
const initialState: StoryPoints = {
  value: undefined,
  user: "Jc",
  room: "Prueba",
  story: "Pantalla login",
};

export const storyPointsSlice = createSlice({
  name: "storyPoints",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,

  reducers: {
    saveStoryPoint: (state) => {
      console.log(state);
      // state. += 1;
    },
  },
});

export const { saveStoryPoint } = storyPointsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value;

export default storyPointsSlice.reducer;
