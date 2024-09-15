import React from 'react'
import { graphql } from 'gatsby'
import { Layout, ArticleInfo, Head } from 'components'
import { PostProps } from 'types'

export default function HomePage ({ data: { allMdx: { edges: posts } } }: PostProps) {
  return (
    <Layout>
      <ul className="articles">
        {posts.map((post) => (
          <li key={post.node.frontmatter.slug} className="articles__listItem">
            <ArticleInfo
              post={post.node.frontmatter}
              imageData={post.node.frontmatter.image}
              inList
            />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMdx(sort: { frontmatter: {date: DESC} }, limit: 3) {
      edges {
        node {
          frontmatter {
            h1
            description
            slug
            tags
            category
            date(formatString: "DD MMMM YYYY", locale: "ru")
            image {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP])
              }
              relativePath
            }
          }
        }
      }
    }
  }
`

export { Head }
