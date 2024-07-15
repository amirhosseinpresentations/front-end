import { defineConfig } from 'vitepress'
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Front-end Roadmap",
  description: "All you have to know as a front-end developer",
  base: "/front-end/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/amir78729' },
      { icon: 'npm', link: 'https://www.npmjs.com/~amir78729' },
      { icon: 'x', link: 'https://x.com/thealibakhshi' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/amirhosseinalibakhshi/' },
    ]
  }
})
