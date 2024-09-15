import React from 'react'
import * as styles from './toc.module.css'

export function Toc ({ headings }: Props) {
  if (headings && headings.items) {
    return (
      <details className={styles.details}>
        <summary className="button">Table of contents</summary>
        <ul className={styles.list}>
          {headings.items.map(item => (
            <RecursiveComponent key={`${item.url}`} {...item} />
          ))}
        </ul>
      </details>
    )
  }

  return null;
}

function RecursiveComponent ({ title, items, depth = 1 }: HeadingItemProps) {
  const style = { marginLeft: (depth * 5 + 5) + 'px' }

  return (
    <li className={styles.list__item} key={`heading-${depth}`} style={style}>
       <a href={`#${title?.toLowerCase().replace(/\s/g, '-')}`}>
        {title}
      </a>

      {Array.isArray(items) ? (
        <ul className={styles.list__item}>
          {items.map(item => (
            <RecursiveComponent key={item.title} depth={depth + 1} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  )
}

type HeadingItemProps = {
  url: string;
  title: string;
  depth?: number;
  items?: HeadingItemProps[]
}

type Props = {
  headings: {
    items: HeadingItemProps[]
  }
}
