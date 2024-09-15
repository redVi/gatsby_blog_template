import React from 'react';
import * as styles from './footer.module.css'

export const Footer = () => (
  <footer className={styles.footer}>
    <a
      href="https://twitter.com/twitter_user"
      className={styles.footer__link}
      rel="nofollow noopener noreferrer"
      target="_blank"
      aria-label="Twitter"
    >
      <svg className="icon icon_twitter">
        <use xlinkHref="#twitter" />
      </svg>
    </a>

    <a
      href="https://t-do.ru/telegram_user"
      className={styles.footer__link}
      rel="nofollow noopener noreferrer"
      target="_blank"
      aria-label="Telegram"
    >
      <svg className="icon icon_telegram">
        <use xlinkHref="#telegram" />
      </svg>
    </a>

    <a
      href="mailto:example@domain.com"
      className={styles.footer__link}
      rel="nofollow noopener noreferrer"
      target="_blank"
      aria-label="Email"
    >
      <svg className="icon icon_mail">
        <use xlinkHref="#email" />
      </svg>
    </a>
  </footer>
)
