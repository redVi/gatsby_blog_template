import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './tags.module.css'

export function Tags ({ inPage, extraStyles }: Tag) {
  const response = useStaticQuery(graphql`
    query getTags {
      allMdx {
        group(field: {frontmatter: {tags: SELECT}}) {
          fieldValue
        }
      }
    }
  `)

  const tags: TagMdx[] = response.allMdx.group

  return (
    <ul className={[
      styles.tags,
      inPage ? styles.tags_page : styles.tags_header,
      extraStyles
    ].join(' ')}>
      {tags.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${tag.fieldValue.toLowerCase()}/`}>
            {tag.fieldValue}
          </Link>
        </li>
      ))}
    </ul>
  )
}

type Tag = {
  inPage?: boolean,
  extraStyles?: string
}

type TagMdx = {
  fieldValue: string
}
