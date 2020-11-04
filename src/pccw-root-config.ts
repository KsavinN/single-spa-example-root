import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@pccw/single-spa-poc-navbar",
  app: () => System.import("@pccw/single-spa-poc-navbar"),
  activeWhen: ["/"],
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

start({
  urlRerouteOnly: true,
});
