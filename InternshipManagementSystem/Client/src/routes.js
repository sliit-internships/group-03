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
import DescriptionIcon from '@mui/icons-material/Description';
//import LibraryBooks from "@material-ui/icons/LibraryBooks";
//import BubbleChart from "@material-ui/icons/BubbleChart";
//import LocationOn from "@material-ui/icons/LocationOn";
//import Notifications from "@material-ui/icons/Notifications";
//import Unarchive from "@material-ui/icons/Unarchive";
//import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "./components/views/Dashboard/Dashboard";
import UserProfile from "./components/views/UserProfile/UserProfile.js";
import TableList from "./components/views/TableList/TableList.js";
import FormPanel from './components/views/FormPanel/FormPanel';
import FormI6 from "./Forms/FormI6/FormI6";
import FormI1A from "./Forms/FormI_1A/FormI_1A";
import FormI1C from "./Forms/FormI1C/FormI1C";
import FormI3A from "./Forms/FormI3A/FormI3A";
//import Typography from "./components/views/Typography/Typography.js";
//import Icons from "./components/views/Icons/Icons.js";
//import Maps from "./components/views/Maps/Maps.js";
//import NotificationsPage from "./components/views/Notifications/Notifications.js";



const dashboardRoutes = [
  {
    path: "/f1",
    name: "Form I-1A",
    icon: DescriptionIcon,
    component: FormI1A,
    layout: "/form",
  },

  {
    path: "/f2",
    name: "Form I-1C",
    icon: DescriptionIcon,
    component: FormI1C,
    layout: "/form",
  },

  {
    path: "/f3",
    name: "Form I-3A",
    icon: DescriptionIcon,
    component: FormI3A,
    layout: "/form",
  },

  {
    path: "/f4",
    name: "Form I-6",
    icon: DescriptionIcon,
    component: FormI6,
    layout: "/form",
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
    path: "/maps",
    name: "Maps",
    icon: LocationOn,
    component: Maps,
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
/*
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin",
  },
*/

];

export default dashboardRoutes;
