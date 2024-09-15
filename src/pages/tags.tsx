import React from 'react'
import { Head, Layout, Tags } from 'components'

export default function TagsPage () {
  return (
    <Layout>
      <h1>Метки</h1>
      <Tags inPage />
    </Layout>
  )
}

export { Head }
