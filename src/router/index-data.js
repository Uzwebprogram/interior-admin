import { lazy } from "react";
import Cookies from "universal-cookie";
import Users from "../pages/users";
const Login = lazy(() => import("./../pages/login/index"))
const AddAdmin = lazy(() => import("./../pages/add_admin/index"))
const Analitka = lazy(() => import("./../pages/analitka/index"))
const Uslugiy = lazy(() => import("./../pages/uslugiy/index"))
const Metadalogiya = lazy(() => import("./../pages/metadalogiya/index"))
const Infarmatsia = lazy(() => import("./../pages/infarmatsia/index"))
const Renkingi = lazy(() => import("./../pages/renkingi/index"))
const Vopros = lazy(() => import("./../pages/vopros/index"))
const PressCenter = lazy(() => import("./../pages/press-center/index"))
const News = lazy(() => import("./../pages/news/index"))
const Reting = lazy(() => import("./../pages/retings/index"))
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
    },
    {
        id : 3,
        path : "/uslugiy",
        component : cookie.get("token") ? <Uslugiy/> : null
    },
    {
        id : 3,
        path : "/metadalogiya",
        component : cookie.get("token") ? <Metadalogiya/> : null
    },
    {
        id : 4,
        path : "/infarmatsia",
        component : cookie.get("token") ? <Infarmatsia/> : null
    },
    {
        id : 5,
        path : "/renking",
        component : cookie.get("token") ? <Renkingi/> : null
    },
    {
        id : 5,
        path : "/vopros",
        component : cookie.get("token") ? <Vopros/> : null
    },
    {
        id : 6,
        path : "/press-center",
        component : cookie.get("token") ? <PressCenter/> : null
    },
    {
        id : 7,
        path : "/news",
        component : cookie.get("token") ? <News/> : null
    },
    {
        id : 8,
        path : "/users",
        component : cookie.get("token") ? <Users/> : null
    },
    {
        id : 9,
        path : "/retings",
        component : cookie.get("token") ? <Reting/> : null
    }
]