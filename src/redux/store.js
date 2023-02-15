import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./login/authSlice";
import AdminSlice from "./admin_add/index";
import AnalitkaSlice from "./analitka/index"
import UslugiySlice from "./uslugi/index"
import MetadalogiyaSlice from "./metadalogiya/index"
import InfarmatsiaSlice from "./infarmatsia/index"
import RenkingiSlice from "./renking/index"
import VoprosSlice from "./vopros/index"
import PressCenterSlice from "./press-center/index"
import NewsSlice from "./news/index"
import UsersSlice from "./users/index"
import CategoriesSlice from "./category"
import BanksSlice from "./banks"
import raitingSlice from "./raiting"
import AboutSlice from "./raiting_about"
export const store = configureStore({
  reducer: {
    admin: authSlice,
    adminadd: AdminSlice,
    analitika : AnalitkaSlice,
    uslugiy : UslugiySlice,
    metadologiya : MetadalogiyaSlice,
    infarmatsia : InfarmatsiaSlice,
    renkingi: RenkingiSlice,
    vopros : VoprosSlice,
    presscenter : PressCenterSlice,
    news : NewsSlice,
    users : UsersSlice,
    categories : CategoriesSlice,
    banks : BanksSlice,
    ratingabout: raitingSlice,
    aboutreking : AboutSlice,
  },
});