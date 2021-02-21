import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@example/single-spa-example-navbar",
  app: () => System.import("@example/single-spa-example-navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@example/single-spa-vue",
  app: () => System.import("@example/single-spa-example-vue"),
  activeWhen: ["/vue"],
});

registerApplication({
  name: "@example/single-spa-angular",
  app: () => System.import("@example/single-spa-example-angular"),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "@example/single-spa-react",
  app: () => System.import("@example/single-spa-example-react"),
  activeWhen: ["/react"],
});

start({
  urlRerouteOnly: true,
});
