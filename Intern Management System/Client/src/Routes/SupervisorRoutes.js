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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from "@mui/icons-material/Description";
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";

// core components/views for Supervisor layout
import DashboardPage from "../Components/views/Dashboard/SupervisorDashboard";
import UserProfile from "../Components/views/UserProfile/SupervisorProfile";
import TableList from "../Components/views/TableList/SupervisorTables/SupervisorTableList";
import FI1B from "../Components/views/Forms/Panel/FI1B";
import FI3Aapproval from "../Components/views/Forms/Panel/FI3Aapproval";
import FI5A from "../Components/views/Forms/Panel/FI5A";

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
    layout: "/supervisor",
  },

  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/supervisor",
  },

  {
    path: "/table",
    name: "My Students",
    icon: AccountCircleIcon,
    component: TableList,
    layout: "/supervisor",
  },

  {
    path: "/FI1B",
    name: "Form I-1B",
    icon: DescriptionIcon,
    component: FI1B,
    layout: "/supervisor",
  },

  {
    path: "/FI1BOnline",
    name: "Form I-3A Approval",
    icon: DescriptionIcon,
    component: FI3Aapproval,
    layout: "/supervisor",
  },

  {
    path: "/FI5A",
    name: "Form I-5A",
    icon: DescriptionIcon,
    component: FI5A,
    layout: "/supervisor",
  },

/*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/supervisor",
  },
*/
/*
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/supervisor",
  },
*/
/*
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/supervisor",
  },
*/
/*
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/supervisor",
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
