import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import AdminSlice from "./admin_add/index"
import YoutubeSlice from "./youtube/index"
import ClientSlice from "./client_comment/index"
import TeamSlice from "./team/index"
export const store = configureStore({
    reducer:{
        admin : authSlice,
        adminadd : AdminSlice,
        youtube : YoutubeSlice,
        client_comment : ClientSlice,
        team : TeamSlice
    }
})
