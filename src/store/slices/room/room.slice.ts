import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface RoomProps {
  nameRoom: string; // name room
  user: string;
  isComplete: boolean;
}

// Define the initial state using that type
const initialState: RoomProps = {
  nameRoom: "",
  user: "Jc",
  isComplete: false,
};

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    room: initialState,
  },

  reducers: {
    createRoom: (state, action) => {
      console.log(state);
      state.room = action.payload.room;
      state.room.isComplete =
        state.room.nameRoom !== "" && state.room.user !== "";
      console.log(state.room.isComplete, "complete");
    },
  },
});

export const { createRoom } = roomSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// export default roomSlice.reducer;
