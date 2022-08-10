import { defineConfig } from "vitepress";

export default defineConfig({
  title: "hc",
  description: "",
  // base: "",
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],
  outDir: '../dist',
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "我的笔记", link: "/myNotes/" },
      { text: "前端总结", link: "/mySummary/" },
      { text: "生活感悟", link: "/myLife/" },
      { text: "关于", link: "/about/" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/houchao233/my-vitepress" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-07-27～present hc",
    },

    sidebar: {
      "/myNotes/": [
        {
          text: '我的笔记',
          items: [
            { text: "笔记一", link: "/myNotes/" },
          ]
        }
      ],
      "/myLife/": [
        {
          text: '生活感悟',
          items: [
            { text: "感悟一", link: "/myLife/" },
          ]
        }
      ],
      "/mySummary/": [
        {
          text: '我的总结',
          items: [
            { text: "总结一", link: "/mySummary/" },
          ]
        }
      ],
      "/about/": [
        {
          text: '关于',
          items: [
            { text: "关于一", link: "/about/" },
          ]
        }
      ],
    },
  },
});
