/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";

// core components/views for Evaluator layout
import DashboardPage from "../Components/views/Dashboard/EvaluatorDashboard";
import UserProfile from "../Components/views/UserProfile/EvaluatorProfile";
import TableList from "../Components/views/TableList/EvaluatorTables/EvaluatorTableList";
import AllResponses from "../Components/views/Forms/Responses/AllResponses";

//import Typography from "./components/views/Typography/Typography.js";
//import Icons from "./components/views/Icons/Icons.js";
//import Maps from "./components/views/Maps/Maps.js";
//import NotificationsPage from "./components/views/Notifications/Notifications.js";



const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/evaluator",
  },

  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/evaluator",
  },

  {
    path: "/table",
    name: "My Students",
    icon: AccountCircleIcon,
    component: TableList,
    layout: "/evaluator",
  },

  {
    path: "/responses",
    name: "Responses",
    icon: ContentPasteIcon,
    component: AllResponses,
    layout: "/evaluator",
  },

/*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/evaluator",
  },
*/
/*
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/evaluator",
  },
*/
/*
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/evaluator",
  },
*/
/*
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/evaluator",
  },
*/
/*
  {
    path: "/rtl-page",
    name: "RTL Support",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
  },
*/
];

export default dashboardRoutes;
