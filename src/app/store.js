import { configureStore } from '@reduxjs/toolkit';
import timelineSlice from '../features/timeline/timelineSlice';

export const store = configureStore({
  reducer: {
    timeline: timelineSlice,
  },
});
