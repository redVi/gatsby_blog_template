export type SearchProps = {
  isFormOpened: boolean
  toggleForm: () => void
}

export type SearchInputProps = {
  searchValue: string
  isFormOpened: boolean
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FrontmatterProps = {
  allMdx: {
    nodes: FrontmatterNode[]
  }
}

export type SearchListProp = {
  searchValue: string
  searchResults: SearchListPost[]
}

type SearchListPost = {
  h1: string
  slug: string
}

type FrontmatterNode = {
  frontmatter: {
    h1: string
    slug: string
  }
}
