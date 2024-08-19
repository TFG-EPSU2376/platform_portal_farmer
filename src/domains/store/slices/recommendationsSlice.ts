import { createSlice } from "@reduxjs/toolkit";

interface RecomendationsState {
  filters: {
    startDate: string;
    endDate: string;
  };
  pagination: {
    cursor: string;
    limit: number;
  };
  recomendations:[];
}

const today = new Date().toISOString().split("T")[0];
const fouraysAgoDate = new Date(new Date().setDate(new Date().getDate() - 2))
  .toISOString()
  .split("T")[0];
const initialState: RecomendationsState = {
  filters: {
    startDate:fouraysAgoDate,
    endDate:today
  },
  pagination: {
    cursor: "",
    limit: 20,
  },
  recomendations:[]
};

export const recomendationsSlice = createSlice({
  name: "recomendations",
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

export const { setFilter, setPagination } = recomendationsSlice.actions;
export default recomendationsSlice.reducer;
