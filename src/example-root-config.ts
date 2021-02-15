import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@example/single-spa-poc-navbar",
  app: () => System.import("@example/single-spa-poc-navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@example/single-spa-vue",
  app: () => System.import("@example/single-spa-vue"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@example/single-spa-angular",
  app: () => System.import("@example/single-spa-angular"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
