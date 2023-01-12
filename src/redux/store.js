import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import AdminSlice from "./admin_add/index";
import YoutubeSlice from "./youtube/index";
import ClientSlice from "./client_comment/index";
import TeamSlice from "./team/index";
import VacancySlice from "./vacancy/index";
import PartnerSlice from "./partner/index";
import ProjectsSlice from "./projects/index";
import ContactSlice from './contact/index'
import CalculateSlice from './calculate/index'
import SingleSlice from './before_after/index'
import ProductsSlice from "./products/index"
import ImagesSlice from "./images_product/index"
export const store = configureStore({
  reducer: {
    admin: authSlice,
    adminadd: AdminSlice,
    youtube: YoutubeSlice,
    client_comment: ClientSlice,
    team: TeamSlice,
    vacancy: VacancySlice,
    partner: PartnerSlice,
    projects: ProjectsSlice,
    contact: ContactSlice,
    calculate: CalculateSlice,
    single: SingleSlice,
    product : ProductsSlice,
    images : ImagesSlice
  },
});