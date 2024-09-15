import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Layout, Head } from 'components'
import * as styles from 'assets/styles/taglist.module.css'
import { PostContentProps } from 'types'

const archiveQuery = graphql`
  query getPosts {
    allMdx(sort: { frontmatter: {date: DESC} }) {
      edges {
        node {
          frontmatter {
            h1
            title
            slug
            date(formatString: "YYYY", locale: "ru")
          }
        }
      }
    }
  }
`

export default function PostsPage () {
  let archive: ArchiveElement[] = [];
  const response = useStaticQuery<PostsProps>(archiveQuery)
  const posts = response.allMdx.edges
  const years = Array.from(
    new Set(posts.map(post => post.node.frontmatter.date))
  )

  // to prepare archive [{ year, archive }, { year, archive }]
  years.forEach(year => {
    archive.push({ year, archive: [] })
  })

  posts.map(post => archive.forEach(item => {
    if (item.year === post.node.frontmatter.date) {
      item.archive.push(post)
    }
  }))

  return (
    <Layout>
      <h1 className={styles.title}>Архив</h1>
      <ul className={styles.tags}>
        {archive.map(({ year, archive }) => (
          <section key={year}>
            <h2>{year}</h2>
            {archive.map(({ node: { frontmatter: { slug, h1 } } }) => (
              <li key={slug} className={styles.tag}>
                <Link to={`/posts/${slug}/`}>{h1}</Link>
              </li>
            ))}
          </section>
        ))}
      </ul>
    </Layout>
  )
}

type PostsProps = {
  allMdx: {
    edges: SingleEdge[]
  }
}

type SingleEdge = {
  node: {
    frontmatter: Pick<PostContentProps, 'h1' | 'title' | 'slug' | 'date'>
  }
}

type ArchiveElement = {
  year: string
  archive: SingleEdge[]
}

export { Head }
