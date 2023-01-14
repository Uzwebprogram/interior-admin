import { lazy } from "react";
import Cookies from "universal-cookie";
const Login = lazy(() => import("./../pages/login/index"))
const AddAdmin = lazy(() => import("./../pages/add_admin/index"))
const Analitka = lazy(() => import("./../pages/analitka/index"))
const cookie = new Cookies();

export const RouterData = [
    {
        id : 1,
        path : "/",
        component :cookie.get("token") ? null : <Login/>
    },
    {
        id : 2,
        path : "/adminadd",
        component : cookie.get("token") ? <AddAdmin/> : null
    },
    {
        id : 3,
        path : "/analitika",
        component : cookie.get("token") ? <Analitka/> : null
    }
]