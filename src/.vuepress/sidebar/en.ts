import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en/": [
    "",
    {
      text: "blog",
      icon: "book",
      prefix: "en/blog/",
      link: "en/blog/",
      children: "structure",
    },
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "en/demo/",
      link: "en/demo/",
      children: "structure",
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "en/posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
