import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';

const initialState: CounterSchema = {
    value: 0,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;

export default userSlice.reducer;
