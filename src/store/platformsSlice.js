import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: {
    instagram: { id: "instagram", name: "Instagram", color: "#E1306C" },
    linkedin: { id: "linkedin", name: "LinkedIn", color: "#0A66C2" },
    twitter: { id: "twitter", name: "X / Twitter", color: "#111111" },
    facebook: { id: "facebook", name: "Facebook", color: "#1877F2" }
  },
  ids: ["instagram", "linkedin", "twitter", "facebook"]
};

const platformsSlice = createSlice({
  name: "platforms",
  initialState,
  reducers: {
    addPlatform(state, action) {
      const platform = action.payload;
      if (!state.entities[platform.id]) {
        state.entities[platform.id] = platform;
        state.ids.push(platform.id);
      }
    },
    removePlatform(state, action) {
      const id = action.payload;
      delete state.entities[id];
      state.ids = state.ids.filter((platformId) => platformId !== id);
    }
  }
});

export const { addPlatform, removePlatform } = platformsSlice.actions;

export const selectPlatforms = (state) =>
  state.platforms.ids.map((id) => state.platforms.entities[id]);

export default platformsSlice.reducer;