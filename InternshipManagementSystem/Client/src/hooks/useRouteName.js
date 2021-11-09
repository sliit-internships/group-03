import addroutes from "../routes/AdminRoutes";
import sturoutes from "../routes/StudentRoutes";
import suproutes from "../routes/SupervisorRoutes";
import evaroutes from "../routes/EvaluatorRoutes";

export const useRouteName = () => {
  let name = "";
  addroutes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = addroutes.rtlActive ? route.rtlName : route.name;
    }
  });
  sturoutes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = sturoutes.rtlActive ? route.rtlName : route.name;
    }
  });
  suproutes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = suproutes.rtlActive ? route.rtlName : route.name;
    }
  });
  evaroutes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = evaroutes.rtlActive ? route.rtlName : route.name;
    }
  });
  return name;
};

