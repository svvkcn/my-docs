import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "博客",
      icon: "book",
      prefix: "blog/",
      link: "blog/",
      children: "structure",
    },
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
