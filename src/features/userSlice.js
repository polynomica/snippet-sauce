import { createSlice } from '@reduxjs/toolkit'

const initialState = { username: null, loggedIn: false, role: "member", token: null }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.username = action.payload.username
            state.loggedIn = action.payload.loggedIn
            state.role = action.payload.role
            state.token = action.payload.token
        },
        setUserLogOutState: (state) => {
            state.username = null
            state.loggedIn = false
            state.role = "member"
            state.token = null
        }
    }
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions
export const selectUsername = (state) => state.user.username
export const selectLoggedIN = (state) => state.user.loggedIn
export const selectToken = (state) => state.user.token
export const selectRole = (state) => state.user.role
export default userSlice.reducer