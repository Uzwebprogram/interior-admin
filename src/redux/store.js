import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import AdminSlice from "./admin_add/index"
import YoutubeSlice from "./youtube/index"
export const store = configureStore({
    reducer:{
        admin : authSlice,
        adminadd : AdminSlice,
        youtube : YoutubeSlice
    }
})
