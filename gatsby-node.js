const path = require('path')

exports.onCreateWebpackConfig = ({ getConfig, actions, plugins }) => {
  const prodMode = getConfig().mode === 'production';

  actions.setWebpackConfig({
    devtool: prodMode ? false : 'eval-cheap-source-map',
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        "@": path.join(__dirname, "src"),
      }
    },
    plugins: [
      plugins.define({
        '__REACT_DEVTOOLS_GLOBAL_HOOK__': `({ isDisabled: true })`
      })
    ],
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/post-template.tsx')
  const tagTemplate = path.resolve('src/templates/tag-template.tsx')

  const result = await graphql(`
    {
      postsRemark: allMdx (sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            tableOfContents(maxDepth: 5)
            internal {
              contentFilePath
            }
            frontmatter {
              h1
              date
              title
              description
              lang
              slug
              category
            }
          }
        }
      }
      tagsGroup: allMdx {
        group(field: {frontmatter: {tags: SELECT}}) {
          fieldValue
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create post detail pages
  const posts = result.data.postsRemark.edges
  posts.forEach(({ node }, index) => {
    const { lang, slug, category } = node.frontmatter
    const prev = index === 0 ? false : posts[index - 1].node
    const next = index === posts.length - 1 ? false : posts[index + 1].node

    return createPage({
      path: `${category}/${slug}/`,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { lang, slug, prev, next },
    })
  })

  // Create tag pages
  const tags = result.data.tagsGroup.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue.toLowerCase()}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

/*
const typeDefs = `
  type SitePage implements Node @dontInfer {
    context: CustomContext
  }
  type CustomContext {
    prev: Boolean
    next: Boolean
  }
`

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  createTypes(typeDefs)
}
*/
