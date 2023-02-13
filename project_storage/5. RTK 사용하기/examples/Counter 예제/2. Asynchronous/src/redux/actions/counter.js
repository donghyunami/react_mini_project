import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
// https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits

const fetchBaseUrl =
  "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits";


export const asyncIncreamentCount = createAsyncThunk(
    "counter/asyncIncreamentCount",
    async () => {
      const { data } = await axios.get(fetchBaseUrl);
      return data.value;
    }
  );