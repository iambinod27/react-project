import { createAsyncThunk } from "@reduxjs/toolkit";
import sportsAxios from "../../../axios/axios";

export const getMatches = createAsyncThunk("movies/list", async () => {
  try {
    const res = await sportsAxios.get("/matches/v1/recent");
    const data = res.data;
    return data;
  } catch (error) {
    throw error;
  }
});
