import { createSlice } from "@reduxjs/toolkit";
import events from "../events";
export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events,
  },
  reducers: {
    setTodos: (state, { payload }) => {
      state.events.push({
        title: payload.title,
        start: payload.start,
        type: payload.type,
        id: payload.id,
      });
    },
    setEvents: (state, { payload }) => {
      state.events.push({
        title: payload.title,
        start: payload.start,
        end: payload.end,
        type: payload.type,
        id: payload.id,
      });
    },
    setRepeatingEvents: (state, { payload }) => {
      state.events.push({
        title: payload.title,
        start: payload.start,
        groupId: payload.groupId,
        type: payload.type,
        id: payload.id,
      });
    },
    setEvents: (state, { payload }) => {
      state.events.push({
        title: payload.title,
        start: payload.start,
        end: payload.end,
        type: payload.type,
        id: payload.id,
        description: payload.description
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTodos, setEvents, setRepeatingEvents } = eventsSlice.actions;

export default eventsSlice.reducer;
