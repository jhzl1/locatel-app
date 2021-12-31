import CashbackScreen from "../pages/CashbackScreen";
import HistoryScreen from "../pages/HistoryScreen";
import HomeScreen from "../pages/HomeScreen";
import LoginScreen from "../pages/LoginScreen";

export const pages = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Login",
    component: LoginScreen,
  },
  {
    name: "History",
    component: HistoryScreen,
  },
  {
    name: "Cashback",
    component: CashbackScreen,
  },
];
