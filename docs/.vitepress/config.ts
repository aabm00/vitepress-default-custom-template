import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // ___ THEME CONFIG ___ //

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false, // Default. Changing locale
    logo: "", // '/logo.svg', // Accepts a path string, or an object to set a different logo for light/dark mode.
    // siteTitle: false, // You can customize this item to replace the default site title. When set to false, title in nav will be disabled
    nav: [
      // { text: "Home", link: "/" },

      {
        text: "Dev-Guide",
        items: [
          { text: "Base Knowledge", link: "/base/" },
          { text: "Web", link: "/web/" },
          { text: "APIs", link: "/apis/" },
          { text: "Languages", link: "/languages/" },
          { text: "Frontend", link: "/frontend/" },
          { text: "Backend", link: "/backend/" },
          { text: "Databases", link: "/databases/" },
          { text: "Docker & K8", link: "/docker/" },
          { text: "DevOps", link: "/devops/" },
          { text: "Cloud & Hosting", link: "/cloud/" },
          {
            items: [{ text: "VS Code", link: "/vscode/" }],
          },
          // DELETE
          { text: "Vue", link: "/vue/vue-1" },
          { text: "Quasar", link: "/quasar/quasar-1" },
        ],
      },
      { text: "Jobs", link: "/jobs/" },
      { text: "Business Strategies", link: "/business/" },
      { text: "Examples", link: "/examples/markdown-examples" },
    ],
    sidebar: {
      "/jobs/": [{ text: "VueJobs", items: [], collapsed: false }],
      "/base/": [
        { text: "SSH", items: [], collapsed: false },
        { text: "Data Structures", items: [], collapsed: false },
        { text: "Algorithms", items: [], collapsed: false },
        { text: "Arquitecture", items: [], collapsed: false },
        { text: "Programming Paradigms", items: [], collapsed: true },
        { text: "Patterns", items: [], collapsed: true },
        { text: "Clean Code & Best practices", items: [], collapsed: true },
        { text: "Testing", items: [], collapsed: true },
        {
          text: "CI/CD",
          items: [
            { text: "Git", items: [], collapsed: true },
            { text: "Github", items: [], collapsed: true },
          ],
          collapsed: true,
        },
        { text: "Performance", items: [], collapsed: true },
        { text: "Security", items: [], collapsed: true },
      ],
      "/web/": [
        { text: "HTML", items: [], collapsed: false },
        { text: "CSS", items: [], collapsed: true },
        { text: "SEO", items: [], collapsed: true },
        { text: "Analytics", items: [], collapsed: true },
      ],
      "/apis/": [
        { text: "Web", items: [], collapsed: false },
        { text: "Backend", items: [], collapsed: true },
      ],
      "/languages/": [
        { text: "Javascript", items: [], collapsed: false },
        { text: "Typescript", items: [], collapsed: true },
      ],
      "/frontend/": [
        {
          text: "Vue",
          items: [
            { text: "Vue 1", link: "/frontend/vue/vue-1" },
            { text: "Vue 2", link: "/frontend/vue/vue-2" },
          ],
          collapsed: false,
        },
        {
          text: "Quasar",
          items: [
            { text: "Quasar 1", link: "/frontend/quasar/quasar-1" },
            { text: "Quasar 2", link: "/frontend/quasar/quasar-2" },
          ],
          collapsed: true,
        },
      ],
      "/backend/": [
        { text: "Node", items: [], collapsed: false },
        { text: "Express", items: [], collapsed: true },
      ],
      "/databases/": [{ text: "MongoDB", items: [] }],
      "/docker/": [
        { text: "Docker", items: [] },
        { text: "Kubernetes", items: [] },
      ],
      "/devOps/": [{ text: "Terraform", items: [], collapsed: false }],
      "/cloud/": [{ text: "firebase", items: [], collapsed: false }],
      // DELETE
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/examples/markdown-examples" },
            { text: "Runtime API Examples", link: "/examples/api-examples" },
          ],
        },
      ],
      "/vue/": [
        {
          text: "Vue",
          items: [
            { text: "Vue 1", link: "/vue/vue-1" },
            { text: "Vue 2", link: "/vue/vue-2" },
          ],
          collapsed: true,
        },
        {
          text: "Vue",
          items: [
            { text: "Vue 1", link: "/vue/vue-1" },
            { text: "Vue 2", link: "/vue/vue-2" },
          ],
          collapsed: true,
        },
      ],
      "/quasar/": [
        {
          text: "Quasar",
          items: [
            { text: "Quasar 1", link: "/quasar/quasar-1" },
            { text: "Quasar 2", link: "/quasar/quasar-2" },
          ],
          collapsed: true,
        },
      ],
    },

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    //   {
    //     text: "Guide",
    //     items: [{ text: "Vue", link: "/testing" }],
    //     collapsed: true,
    //   },
    // ],
    aside: true, // default: true.
    outline: 2, // default: 2.
    outlineTitle: "On this page", // default: 'On this page'
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // footer: {}, // You can add a message or copyright text on the footer
    // editLink: {}, // Edit Link lets you display a link to edit the page on Git
    lastUpdatedText: "", // The prefix text showing right before the last updated time.
    search: { provider: "local" },
    // algolia:
    // carbonAds:
    // docFooter: {}, // Can be used to customize text appearing above previous and next links. Helpful if not writing docs in English.
    // darkModeSwitchLabel: "", // Can be used to customize the dark mode switch label. This label is only displayed in the mobile view.
    // sidebarMenuLabel: "", // Can be used to customize the sidebar menu label. This label is only displayed in the mobile view.
    // returnToTopLabel: "", // Can be used to customize the label of the return to top button. This label is only displayed in the mobile view.
    // langMenuLabel: "", // Can be used to customize the aria-label of the language toggle button in navbar. This is only used if you're using i18n.
  },

  // ___ METADATA ___ //

  title: "DEV-TOOLS",
  // titleTemplate: "", // Allows customizing each page's title suffix or the entire title
  description: "Technical information for developers", // Description for the site
  head: [], // default. Additional elements to render in the <head> tag in the page HTML.
  lang: "en-US", // Default. The lang attribute for the site.
  base: "/", // Default. The base URL the site will be deployed at.

  // ___ ROUTING ___ //

  cleanUrls: false, // default. When set to true, VitePress will remove the trailing .html from URLs (Server Support Required)
  rewrites: {}, // See documentation

  // ___ BUILD ___ //

  srcDir: "src", // The directory where your markdown pages are stored, relative to project root
  srcExclude: [], // A glob pattern for matching markdown files that should be excluded as source content
  outDir: "./.vitepress/dist", // Default. The build output location for the site, relative to project root.
  cacheDir: "./.vitepress/.vite", // default. The directory for cache files, relative to project root.
  ignoreDeadLinks: false, // Default. VitePress fail builds due to dead links.
  mpa: false, // Experimental. App will be built in MPA Mode.

  // ___ THEMING ___ //

  appearance: true, // Default. Enable or disable dark mode
  lastUpdated: false, // Default. Whether to get the last updated timestamp for each page using Git

  // ___ CUSTOMIZATION ___ //

  vite: {
    // Vite config options
  },
  vue: {
    // @vitejs/plugin-vue options
  },
  markdown: {
    // markdown config options
  },

  // ___ HOOKS ___ //

  // VitePress build hooks allow you to add new functionality and behaviors
  // to your website: Sitemap, Search Indexing, PWA, Teleports

  /**
   * buildEnd is a build CLI hook, it will run after build (SSG) finish
   * but before VitePress CLI process exits.
   *
   * @param siteConfig
   */
  async buildEnd(siteConfig) {},

  /**
   * postRender is a build hook, called when SSG rendering is done.
   * It will allow you to handle the teleports content during SSG.
   *
   * @param context
   */
  async postRender(context) {},

  /**
   * transformHead is a build hook to transform the head before generating
   * each page. It will allow you to add head entries that cannot be statically
   * added to your VitePress config. You only need to return extra entries,
   * they will be merged automatically with the existing ones.
   *
   * @param context
   */
  async transformHead(context) {},

  /**
   * transformHtml is a build hook to transform the content of each page
   * before saving to disk.
   *
   * @param code
   * @param id
   * @param context
   */
  async transformHtml(code, id, context) {},

  /**
   * transformPageData is a hook to transform the pageData of each page.
   * You can directly mutate pageData or return changed values which will be
   * merged into PageData.
   *
   * @param pageData
   * @param param1
   */
  async transformPageData(pageData, { siteConfig }) {},
});
