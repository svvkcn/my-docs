import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/my-docs/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "svvk.cn",
      description: "svvk.cn宋维康",
    },
    "/en/": {
      lang: "en-US",
      title: "svvk.cn",
      description: "svvk.cn宋维康",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
