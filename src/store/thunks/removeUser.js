import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("remove/user", async (id) => {
  console.log(id);
  const user = await axios.delete(`http://localhost:3001/users/${id}`);
  return user.data;
});
export { removeUser };
