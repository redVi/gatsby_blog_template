import React from 'react'
import { GatsbyImageData } from 'types'

export default function BackgroundImage ({ image, className = '', tag = 'div', ...props }: Props) {
  const TagName = tag;
  let backgroundImage = image?.childImageSharp?.gatsbyImageData?.images?.sources[0].srcSet;

  if (backgroundImage) {
    backgroundImage = backgroundImage?.split(',').pop().split(' ')[0];
  }

  return (
    <TagName
      className={className}
      style={{
        backgroundImage: `url(${backgroundImage || ''})`,
        backgroundColor: image?.childImageSharp?.gatsbyImageData?.backgroundColor || 'slategray'
      }}
      {...props} />
  )
}

type Props = {
  image: {
    childImageSharp: {
      gatsbyImageData: GatsbyImageData
    }
  }
  tag?: any;
  className?: string;
  [x:string]: any;
}
