import { createSlice } from "@reduxjs/toolkit";

interface AlertsState {
  filters: {
    startDate: string;
    endDate: string;
  };
  pagination: {
    cursor: string;
    limit: number;
  };
  alerts:[];
}

const today = new Date().toISOString().split("T")[0];
const fouraysAgoDate = new Date(new Date().setDate(new Date().getDate() - 2))
  .toISOString()
  .split("T")[0];
const initialState: AlertsState = {
  filters: {
    startDate:fouraysAgoDate,
    endDate:today
  },
  pagination: {
    cursor: "",
    limit: 20,
  },
  alerts:[]
};

export const alertsSlice = createSlice({
  name: "alerts",
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

export const { setFilter, setPagination } = alertsSlice.actions;
export default alertsSlice.reducer;
