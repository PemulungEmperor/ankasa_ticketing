import { createSlice } from '@reduxjs/toolkit'

const profilePhotoSlicer = createSlice({
    name: "user",
    initialState: {
        userPhoto : {
            photo_path: "",
        },
    isPending : false,
    isError : null
    },
    reducers : {

        successUpdatePhoto: (state, action) => {
            state.isPending = false
            state.isError = false
            state.userPhoto = action.payload
        },
    }
})


//login
export const { successUpdatePhoto } = profilePhotoSlicer.actions
export default profilePhotoSlicer.reducer
