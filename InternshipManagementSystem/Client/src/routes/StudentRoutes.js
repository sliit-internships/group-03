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
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";

// core components/views for Student layout
import DashboardPage from "../components/views/Dashboard/StudentDashboard";
import UserProfile from "../components/views/UserProfile/StudentProfile.js";
import TableList from "../components/views/TableList/StudentTableList.js";
import DescriptionIcon from "@mui/icons-material/Description";
import StudentForms from "../components/views/FormPanel/StudentForms";
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
    layout: "/student",
  },

  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/student",
  },

  {
    path: "/table",
    name: "Table List",
    icon: ContentPasteIcon,
    component: TableList,
    layout: "/student",
  },

  {
    path: "/forms_student",
    name: "Forms",
    icon: DescriptionIcon,
    component: StudentForms,
    layout: "/student",
  },

/*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/student",
  },
*/
/*
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/student",
  },
*/
/*
  {
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
    layout: "/student",
  },
*/
/*
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/student",
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