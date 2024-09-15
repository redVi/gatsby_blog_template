import React from 'react'

interface IVideo {
  src: string
  type: string
  label?: string
  lang?: string
}

const Video = ({ src, type, label = 'видео', lang = 'ru' }: IVideo) => (
  <video controls>
    <source src={src} type={type || 'video/mp4'} />
    <track kind="captions" srcLang={lang} label={label} />
      Your browser doesn&apos;t support HTML5 video tag.
  </video>
)

export default Video
