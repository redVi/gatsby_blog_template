import React, { useEffect } from 'react'
import { graphql } from 'gatsby'
import { Head, ArticleInfo, NextPrev, Comments, Layout, Toc } from 'components'
import { createCopyButton } from 'helpers'
import { PostContentProps, PrevNextProps } from 'types'
import 'assets/styles/prism-onelight.css'

export default function PostTemplate ({
  data: { mdx },
  children,
  pageContext: { prev, next }
}: PostTemplateProps) {
  const { image, table_of_contents: hasToc } = mdx.frontmatter

  useEffect(() => {
    createCopyButton()
  }, [])

  return (
    <Layout>
      <ArticleInfo post={mdx.frontmatter} imageData={image}>
        {hasToc ? <Toc headings={mdx.tableOfContents} /> : null}

        <div className="page__content">
          {children}
          <NextPrev prev={prev} next={next} />
        </div>

        <Comments />
      </ArticleInfo>
    </Layout>
  )
}

export const postsQuery = graphql`
  query getPost($lang: String!, $slug: String!) {
    mdx(frontmatter: { lang: { eq: $lang }, slug: { eq: $slug } }) {
      tableOfContents(maxDepth: 5)
      frontmatter {
        h1
        title
        description
        slug
        tags
        table_of_contents
        date(formatString: "DD MMMM YYYY", locale: $lang)
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

type PostTemplateProps = {
  data: {
    mdx: {
      tableOfContents: any
      frontmatter: PostContentProps
    }
  },
  children: React.ReactElement
  pageContext: {
    prev: PrevNextProps
    next: PrevNextProps
  }
}

export { Head }
