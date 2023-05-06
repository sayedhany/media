import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3001/users");
  // console.log(res.data);
  await pause(1000);
  return res.data;
});
const pause = (duration) => {
  return new Promise((solve) => {
    setTimeout(solve, duration);
  });
};
export { fetchUsers };
