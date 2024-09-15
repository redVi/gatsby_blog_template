// @ts-nocheck
import React from 'react'

export const Head = ({ location, params, data, pageContext }) => {
  const { lang = 'ru', frontmatter, tag } = pageContext;
  let param = {
    title: frontmatter?.title || '',
    description: '',
    siteUrl: 'http://localhost:8001',
  }

  const switchParams = () => {
    // TODO: 404
    switch (location.pathname) {
      case (location.pathname.match(/^\/tags\//) || {}).input:
        param.title = tag ? `Записи с тегом ${tag}` : 'Все теги'
        param.description = 'Записи, сгруппированные по меткам'
        break;
      case (location.pathname.match(/^\/posts\/$/) || {}).input:
        param.title = frontmatter?.title || 'Все записи'
        param.description = 'Архив блога'
        break;
      default:
        param.title = 'Заметки на полях'
        param.description = 'Блог о linux и программировании'
        break;
    }
  }

  switchParams();

  // http-equiv': 'Cache-Control', content: isDevelopment ? 30 : 31536000
  const metaTitle = frontmatter?.title || param.title
  const metaDescription = frontmatter?.description || param.description
  const postImage = frontmatter?.image?.images?.sources[0]?.srcSet || '/images/default_bg.jpg';

  return (
    <>
      <html lang={lang} />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={postImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@octowed" />
      <meta name="twitter:creator" content="@octowed" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={postImage} />

      <link rel="preload" as="font" type="font/woff2" href="/fonts/Philosopher_ru.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/fonts/Philosopher_en.woff2" crossOrigin="anonymous" />
    </>
  )
}
