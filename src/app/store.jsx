import { configureStore } from "@reduxjs/toolkit";
import eventsSlice from "../Slices/EventsSlice";

export default configureStore({
  reducer: {
    events: eventsSlice,
  },
});
