import React, { useState } from 'react'
import * as styles from './tabs.module.css'

export function Tabs ({ headings, children }: TabsProps) {
  const [isActive, setIsActive] = useState(0)

  return (
    <div className={styles.tabbed}>
      <div className={styles.tab__buttons}>
        {headings &&
          headings.map((heading, index) => {
            const handleCheck = () => setIsActive(index)
            return (
              <button
                type="button"
                key={`tab-${heading}`}
                className={[styles.tab__button, isActive === index && styles.tab__button_active].join(' ')}
                onClick={handleCheck}
              >
                {heading}
              </button>
            )
          })}
      </div>

      <div className={styles.tabs}>
        {children ? children.map((tab, index) => {
          const isActiveElement = isActive === index;

          return (
            <div
              key={`tab-id-content-${index}`}
              aria-hidden={!isActiveElement}
              className={[styles.tab_single, isActiveElement ? styles.tab_single_active : ''].join(' ')}
              style={isActiveElement ? {
                transform: 'rotateX(0)',
                opacity: 1,
                zIndex: 1,
                position: 'relative',
              } : {}}
            // dangerouslySetInnerHTML={{ __html: tab }}
            >
              {tab}
            </div>
          )
        }) : null}
      </div>
    </div>
  )
}

type TabsProps = {
  headings: string[],
  children: React.JSX.Element[]
}
