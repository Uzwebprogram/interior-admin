import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import AdminSlice from "./admin_add/index"
export const store = configureStore({
    reducer:{
        admin : authSlice,
        adminadd : AdminSlice,
    }
})
