import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const addNewUser = createAsyncThunk(
	'user/add',
	async (params) => {
		const response = await fetch(' http://localhost:8080/users', {method: 'POST', body: params})
		return response.json();
	}
);
export const login = createAsyncThunk(
	'user/login',
	async (params) => {
		const response = await fetch(' http://localhost:8080/users?' +  new URLSearchParams(params))
		return response.json();
	}
);

const initialState: {me: User | undefined} = {
	me: undefined,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setMeFromLS: (state, action) => {
			state.me = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(addNewUser.fulfilled, (state: typeof initialState, action) => {
				const me = action.payload as User;
				localStorage.setItem('me', JSON.stringify(me) )
				state.me = me;
			})
			.addCase(login.fulfilled, (state: typeof initialState, action) => {
				const me = action.payload[0] as User;
				localStorage.setItem('me', JSON.stringify(me) )
				state.me = me;
			})
	}
});

export const {setMeFromLS} = userSlice.actions;

export const getUserData = (state) => state.user;

export default userSlice.reducer;
