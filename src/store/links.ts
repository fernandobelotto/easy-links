import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initial = [];

interface Linkstate {
  links: any[];
}

const initialState: Linkstate = {
  links: initial,
};

const linkslice = createSlice({
  name: "links",
  initialState,
  reducers: {
    setLinks(state, action) {
      state.links = action.payload;
    },
    addNewLink(state, action) {
      state.links.push(action.payload);
    },
    removeLink(state, action) {
      state.links = state.links.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { setLinks, addNewLink, removeLink } = linkslice.actions;

export default linkslice.reducer;
