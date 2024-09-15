import React from 'react'
import { Link, graphql } from 'gatsby'
import { Head, Layout } from 'components'
import * as styles from 'assets/styles/taglist.module.css'

export default function TagTemplate ({ pageContext, data } : TagContext) {
  const { tag } = pageContext
  const { edges } = data.allMdx
  const formattedTag = (tag === 'tex' || tag === 'TeX')
    ? 'TeX'
    : tag[0].toUpperCase() + tag.slice(1).toLowerCase();

  return (
    <Layout>
      <section className={styles.page}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{formattedTag}</h1>
        </div>
        <ul className={styles.tags}>
          {edges.map(({ node }) => {
            const { h1, slug } = node.frontmatter
            return (
              <li key={slug} className={styles.tag}>
                <Link to={`/posts/${slug}/`}>{h1}</Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export { Head }

export const tagQuery = graphql`
  query($tag: String) {
    allMdx(sort: { frontmatter: {date: DESC} }, filter: { frontmatter: { tags: {in: [$tag] } } }) {
      edges {
        node {
          frontmatter {
            slug
            h1
            title
          }
        }
      }
    }
  }
`

type TagNode = {
  node: {
    frontmatter: {
      slug: string
      h1: string
    }
  }
}

type TagTemplate = {
  allMdx: {
    edges: TagNode[]
  }
}

type TagPageContext = {
  tag: string
}

type TagContext = {
  pageContext: TagPageContext
  data: TagTemplate
}
