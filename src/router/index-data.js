import { lazy } from "react";
import Cookies from "universal-cookie";

const Login = lazy(() => import("./../pages/login/index"))
const Dashboard = lazy(() => import("./../pages/dashboard/index"))
const AddAdmin = lazy(() => import("./../pages/add_admin/index"))
const Team = lazy(() => import("./../pages/team/index"))
const Contact = lazy(() => import("./../pages/contact/index"))
const Vacancy = lazy(() => import("./../pages/vacancy/index"))
const CalculateProject = lazy(() => import("./../pages/calculate_project/index"))
const PortfolioYoutube = lazy(() => import("./../pages/portfolio_youtube/index"))
const Projects = lazy(() => import("./../pages/projects/index"))
const Parterns = lazy(() => import("./../pages/Parterns/index"))
const Category = lazy(() => import("./../pages/category/index"))
const CilentComment = lazy(() => import("./../pages/client_comment/index"))
const BeforeAfter = lazy(() => import("./../pages/before_after/index"))
const cookie = new Cookies();

export const RouterData = [
    {
        id : 1,
        path : "/",
        component :cookie.get("token") ? null : <Login/>
    },
    {
        id : 2,
        path : "/dashboard",
        component : cookie.get("token") ? <Dashboard/> :null
    },
    {
        id : 3,
        path : "/adminadd",
        component : cookie.get("token") ? <AddAdmin/> : null
    },
    {
        id : 4,
        path : "/team",
        component : cookie.get("token") ? <Team/> : null
    },
    {
        id : 5,
        path : "/contact",
        component : cookie.get("token") ? <Contact/> : null
    },
    {
        id : 6,
        path : "/calculateproject",
        component : cookie.get("token") ? <CalculateProject/> : null
    },
    {
        id : 7,
        path : "/vacancy",
        component : cookie.get("token") ? <Vacancy/> : null
    },
    {
        id : 8,
        path : "/portfolioyoutube",
        component : cookie.get("token") ? <PortfolioYoutube/> : null
    },
    {
        id : 9,
        path : "/projects",
        component : cookie.get("token") ? <Projects/> : null
    },
    {
        id : 10,
        path : "/partners",
        component : cookie.get("token") ? <Parterns/> : null
    },
    {
        id : 11,
        path : "/category",
        component : cookie.get("token") ? <Category/> : null
    },
    {
        id : 12,
        path : "/clientcomment",
        component : cookie.get("token") ? <CilentComment/> : null
    },
    {
        id : 13,
        path : "/beforeafter",
        component : cookie.get("token") ? <BeforeAfter/> : null
    },
]