import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/welcome"],
});

registerApplication({
  name: "@pccw/single-spa-vue",
  app: () => System.import("@pccw/single-spa-vue"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@pccw/single-spa-angular",
  app: () => System.import("@pccw/single-spa-angular"),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "@pccw/poc-react-single-spa",
  app: () => System.import("@pccw/poc-react-single-spa"),
  activeWhen: ["/react"],
});

start({
  urlRerouteOnly: true,
});
