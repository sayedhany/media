import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3001/users");
  // console.log(res.data);
  return res.data;
});

export { fetchUsers };
