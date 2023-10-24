import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface HuProps {
  storyId: string;
  roomId: string;
  title: string;
  pointAverage: string;
  StoryPoint: [
    {
      storyId: string;
      storyPointId: string;
      time: string;
      userId: string;
      value: string;
    }
  ];
}

// Define the initial state using that type
const initialState: HuProps = {
  storyId: "",
  roomId: "",
  title: "",
  pointAverage: "",
  StoryPoint: [
    {
      storyId: "",
      storyPointId: "",
      time: "",
      userId: "",
      value: "",
    },
  ],
};

export const roomSlice = createSlice({
  name: "hu",
  initialState: {
    hu: initialState,
  },

  reducers: {
    createHu: (state, action) => {
      //   console.log(state);
      state.hu = action.payload.hu;
      //   state.hu.roomId =
      // state.room.nameRoom !== "" && state.room.user !== "";
      //   console.log(state.room.isComplete, "complete");
    },
  },
});

export const { createHu } = roomSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

// export default roomSlice.reducer;
