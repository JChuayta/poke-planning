import { createSlice } from "@reduxjs/toolkit";
interface RoomProps {
  roomId: string;
  nameRoom: string;
  description: string;
}

// Define the initial state using that type
const initialState: RoomProps = {
  roomId: "123123",
  nameRoom: "",
  description: "Sprint 1",
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
      // state.room.isComplete =
      //   state.room.nameRoom !== "" && state.room.user !== "";
      // console.log(state.room.isComplete, "complete");
    },
  },
});

export const { createRoom } = roomSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// export default roomSlice.reducer;
