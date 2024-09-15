import React from 'react'
import { Head, Layout } from 'components'
import * as styles from 'assets/styles/404.module.css'

export default function NotFoundPage () {
  return (
    <Layout>
      <section className={styles.not_found}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <p>Страница не найдена</p>
          <a href="/" className="button">Вернуться домой</a>
        </div>
        <img src="/images/404.jpg" alt="404" width={400} />
      </section>
    </Layout>
  )
}

export { Head }
