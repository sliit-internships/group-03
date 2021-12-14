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
import BusinessIcon from '@mui/icons-material/Business';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";

// core components/views for Admin layout
import DashboardPage from "../Components/views/Dashboard/AdminDashboard";
import UserProfile from "../Components/views/UserProfile/AdminProfile";
import CompanyTable from "../Components/views/TableList/AdminTables/CompanyTable";
import StudentTable from "../Components/views/TableList/AdminTables/StudentTableList";
import EvaluatorTableList from "../Components/views/TableList/AdminTables/EvaluatorTableList";
import SupervisorTableList from "../Components/views/TableList/AdminTables/SupervisorTableList";
//import Typography from "./components/views/Typography/Typography.js";
//import Icons from "./components/views/Icons/Icons.js";
//import Maps from "./components/views/Maps/Maps.js";
//import NotificationsPage from "./components/views/Notifications/Notifications.js";

const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Admin Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },

  {
    path: "/user",
    name: "Admin Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },

  {
    path: "/companies",
    name: "Companies",
    icon: BusinessIcon,
    component: CompanyTable,
    layout: "/admin",
  },

  {
    path: "/students",
    name: "Students",
    icon: AccountCircleIcon,
    component: StudentTable,
    layout: "/admin",
  },

  {
    path: "/evaluator",
    name: "Evaluator",
    icon: PeopleOutlineIcon,
    component: EvaluatorTableList,
    layout: "/admin",
  },

  {
    path: "/supervisor",
    name: "Supervisor",
    icon: SupervisorAccountIcon,
    component: SupervisorTableList,
    layout: "/admin",
  },

/*
  {
    path: "/typography",
    name: "Typography",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin",
  },
*/
/*
  {
    path: "/icons",
    name: "Icons",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin",
  },
*/

/*
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
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
