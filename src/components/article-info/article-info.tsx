import React from 'react'
import { Link } from 'gatsby'
import { PostContentProps, GatsbyImageData } from 'types'
import { BackgroundImage } from 'components'

import './article.css'

export function ArticleInfo ({
  post,
  inList = false,
  children,
  imageData,
}: AtricleProps) {
  const { tags, date, h1, category, slug } = post

  if (inList) {
    return (
      <article className="article article_inList">
        <header className="article__header article__header_inList">
          <BackgroundImage
            image={imageData}
            tag={Link}
            className="article__image article__image_inList"
            to={`/${category}/${slug}/`}
            aria-label="Перейти к записи"
           />
          <div className="article__box article__box_inList">
            <h2 className="article__title">{h1}</h2>
            <span className="article__date">{post?.description}</span>
          </div>
        </header>
      </article>
    )
  }

  return (
    <article className="article">
      <header className="article__header">
        <div className="article__box">
          <h1 className="article__title">{h1}</h1>
          <Link className="article__tag" to={`/tags/${tags[0].toLowerCase()}/`}>
            <span>{tags[0]}</span>
          </Link>
          <span className="article__date">{date}</span>
        </div>
        <BackgroundImage
          image={imageData}
          tag="div"
          className="article__image"
        />
      </header>
      {children}
    </article>
  )
}

type AtricleProps = {
  inList?: boolean,
  post: PostContentProps,
  imageData: {
    childImageSharp: {
      gatsbyImageData: GatsbyImageData
    }
  }
  children?: React.ReactNode,
}
