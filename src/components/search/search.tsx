import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { SearchList } from './search-list'
import { SearchInput } from './search-input'
import { SearchButton } from './search-button'
import { SearchProps, FrontmatterProps } from './types';
import './search.css'

export const Search = ({ isFormOpened, toggleForm }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)
  const { allMdx: { nodes } } = useStaticQuery<FrontmatterProps>(graphql`
    query SearchQuery {
      allMdx {
        nodes {
          frontmatter { h1 slug }
        }
      }
    }
  `)

  const searchResults = nodes
    .map(node => node.frontmatter)
    .filter(item => item && item.h1 && item.h1
      .toLowerCase()
      .includes(searchValue.toLowerCase())
    )

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault() }
  const handleToggleForm = () => {
    toggleForm();
    setSearchValue('');
  }

  return (
    <div className={['searchBlock', isFormOpened ? 'searchBlock_active' : ''].join(' ')}>
      <form
        className={['searchForm', !isFormOpened ? 'searchForm_hidden' : ''].join(' ')}
        action="#"
        onSubmit={handleSubmit}
      >
        <SearchInput
          searchValue={searchValue}
          isFormOpened={isFormOpened}
          handleChange={handleChange}
        />
      </form>
      <SearchButton isFormOpened={isFormOpened} toggleForm={handleToggleForm} />
      {isFormOpened ? <SearchList searchResults={searchResults} searchValue={searchValue} /> : null}
    </div>
  )
}
