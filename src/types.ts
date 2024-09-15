export type PostProps = {
  data: {
    allMdx: {
      edges: PostNodeProps[]
    }
  }
}

export type PrevNextProps = {
  frontmatter: {
    slug: string
    category: string
    h1: string
  }
}

export type PostContentProps = {
  h1: string
  title: string
  description?: string
  slug: string
  tags: string[]
  category: string
  date: string
  table_of_contents?: boolean
  image: {
    childImageSharp: {
      gatsbyImageData: GatsbyImageData
    }
    relativePath: string
  },
}

export type GatsbyImageData = {
  layout: string
  backgroundColor: string
  height: number
  widht: number
  images: {
    fallback: {
      src: string
      srcSet: string
    }
    sources: [
      {
        srcSet: string
        type: string
        sizes: string
      }
    ]
  },
}

type PostNodeProps = {
  node: {
    frontmatter: PostContentProps
  }
}
