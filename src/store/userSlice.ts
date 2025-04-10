import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from './index.ts' ;
import { $auth } from "../plugins/axios.ts";

interface UserState {
  username: string;
  email: string;
  role: string;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  username: '',
  email: '',
  role: '',
  loading: true,
  error: null
}

export const fetchUser = createAsyncThunk(
  'auth/fetchUser',
  async (_, thunkAPI) => {
    try {
      const res = await $auth.get('/verify-user', { withCredentials: true });
      return res.data.user;
    } catch (err) {
      return thunkAPI.rejectWithValue('Not authenticated');
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userChange: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.role = action.payload.role;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, {payload}) => {
        state.username = payload.username;
        state.email = payload.email;
        state.role = payload.role;
        state.loading = false;
      })
      .addCase(fetchUser.rejected, (state, {payload}) => {
        state.loading = false;
        state.error = typeof payload === 'string' ? payload : 'Authentication error.';
      })
  }
});

export const { userChange } = userSlice.actions;
export const currentUser = (state:RootState) => state.user;
export default userSlice.reducer;