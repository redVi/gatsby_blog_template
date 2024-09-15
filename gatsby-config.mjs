import remarkGfm from "remark-gfm";

const gatsbyRemarkPlugins = [
  {
    resolve: "gatsby-remark-external-links",
    options: {
      target: "_blank",
      rel: "nofollow"
    },
  }, "gatsby-remark-autolink-headers", {
    resolve: "gatsby-remark-images",
    options: {
      maxWidth: 1200,
      linkImagesToOriginal: false,
      disableBgImageOnAlpha: true,
      quality: 80,
      withWebp: true,
      loading: "lazy",
      disableBgImage: true,
      wrapperStyle: (fluidResult) => `flex:${Math.round(fluidResult.aspectRatio)};`,
    },
  }, "gatsby-remark-images-medium-zoom",
  {
    resolve: "gatsby-remark-prismjs",
    options: {
      classPrefix: "language-",
      inlineCodeMarker: null,
      showLineNumbers: false,
      languageExtensions: [
        {
          language: "vue",
          extend: "html",
          definition: {
            vue_types: /(VueType)/,
          },
        },
        {
          language: "conf",
          extend: "bash",
          definition: {
            vue_types: /(ConfType)/,
          },
        },
      ],
    },
  },
];

export default {
  siteMetadata: {
    title: "Gatsby blog",
    description: "Description",
    siteUrl: "http://localhost:8001",
  },
  plugins: [
    "gatsby-plugin-postcss", {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/favicon-32x32.png",
        name: "Blog name",
        short_name: "Short name",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#DFDBE5",
        display: "standalone",
      }
    }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./content/"
      },
      __key: "content"
    }, {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: ['.mdx', '.md'],
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        },
        gatsbyRemarkPlugins,
      },
    }, "gatsby-plugin-sitemap"]
};
