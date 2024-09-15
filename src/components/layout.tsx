import React from 'react'
import { Script } from 'gatsby'
import { Header, Footer, SvgSprite } from 'components'
import { isProduction } from '../constants'
import { getMetrica } from '../helpers'

export default function Layout ({ children }: LayoutProps) {
  return (
    <>
      <SvgSprite />
      <div className="layout">
        <Header />
        <main className="page">
          {children}
        </main>
        <Footer />
        {isProduction ? (
          <Script id="metrics" dangerouslySetInnerHTML={{ __html: getMetrica() }} />
        ) : null}
      </div>
    </>
  )
}

type LayoutProps = {
  children: React.JSX.Element | React.JSX.Element[]
}
