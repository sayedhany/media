import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("remove/user", async (id) => {
  const user = await axios.delete(`http://localhost:3001/users/${id}`);
  // console.log(user);
  return user.data;
});
export { removeUser };
