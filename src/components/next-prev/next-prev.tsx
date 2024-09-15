import React from 'react'
import { Link } from 'gatsby'
import * as styles from './next-prev.module.css'

export const NextPrev: React.FC<INextPrev> = ({ prev, next }) => {
  const prevPost = prev.frontmatter
  const nextPost = next.frontmatter

  return (
    <div className={styles.links}>
      {nextPost && nextPost.slug ? (
        <React.Fragment>
          <Link className={styles.link} to={`/${nextPost.category}/${nextPost.slug}/`}>
            <span>{nextPost.h1}</span>
          </Link>
          <span className={styles.link__separator} />
        </React.Fragment>
      ) : null}

      {prevPost && prevPost.slug ? (
        <Link className={styles.link} to={`/${prevPost.category}/${prevPost.slug}/`}>
          <span>{prevPost.h1}</span>
        </Link>
      ) : null}
    </div>
  )
}

type NextPrev = {
  frontmatter: {
    slug?: string
    category: string
    h1: string
  }
}

type INextPrev = {
  prev: NextPrev
  next: NextPrev
}
