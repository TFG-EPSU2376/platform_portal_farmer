import { createSlice } from "@reduxjs/toolkit";

interface SensorsState {
  filters: {
    startDate: string;
    endDate: string;
  };
  pagination: {
    cursor: string;
    limit: number;
  };
}

const today = new Date().toISOString().split("T")[0];
const fouraysAgoDate = new Date(new Date().setDate(new Date().getDate() - 365))
  .toISOString()
  .split("T")[0];
const initialState: SensorsState = {
  filters: {
    startDate:fouraysAgoDate,
    endDate:today
  },
  pagination: {
    cursor: "",
    limit: 20,
  },
};

export const sensorsSlice = createSlice({
  name: "sensors",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filters[action.payload.key] = action.payload.value;
    },
    setPagination: (state, action) => {
      state.pagination[action.payload.key] = action.payload.value;
    },
  },
});

export const { setFilter, setPagination } = sensorsSlice.actions;
export default sensorsSlice.reducer;
