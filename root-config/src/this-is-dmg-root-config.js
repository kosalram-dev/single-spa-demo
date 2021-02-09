// import { registerApplication, start } from "single-spa";
// import {
//   constructApplications,
//   constructRoutes,
//   constructLayoutEngine,
// } from "single-spa-layout";

// const routes = constructRoutes(document.querySelector("#single-spa-layout"));
// const applications = constructApplications({
//   routes: '@this-is-dmg/nav',
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });
// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// layoutEngine.activate();
// start();


import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@this-is-dmg/nav",
  () => System.import("@this-is-dmg/nav"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@this-is-dmg/app1",
  () => System.import("@this-is-dmg/app1"),
  isActive.app1,
  { domElement: document.getElementById('app1-container') }
);

start();