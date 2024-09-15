import React from 'react'
import { Link } from 'gatsby'
import { SearchListProp } from './types'

export const SearchList = ({ searchResults, searchValue }: SearchListProp) => (
  <ul className="searchForm__list">
    {searchResults.length && searchValue.length ? (
      searchResults.map(post => (
        <li key={`search-${post.h1}`}>
          <Link to={`/posts/${post.slug}/`}>{post.h1}</Link>
        </li>
      ))
    ) : null}
  </ul>
)

