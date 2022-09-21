import { registerApplication, start } from "single-spa";

 registerApplication({
   name: "@weincode/mf-header",
   app: () => <any>System.import("@weincode/mf-header"),
   activeWhen: ["/"]
});

 registerApplication({
   name: "@weincode/mf-main",
   app: () => <any>System.import("@weincode/mf-main"),
   activeWhen: ["/"]
});

 registerApplication({
   name: "@weincode/mf-images",
   app: () => <any>System.import("@weincode/mf-images"),
   activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
