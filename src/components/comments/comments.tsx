import React, { useState, useEffect } from 'react'
import { runDisqus } from './disqus'

export default function Comments () {
  const [isThreadOpened, setIsThreadOpened] = useState(false)
  const handleOpenThread = () => {
    setIsThreadOpened(true)
    if (typeof window !== 'undefined') runDisqus()
  }

  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset()
    }
  }, [])

  return (
    <div className="comments">
      {!isThreadOpened && (
        <button onClick={handleOpenThread} className="button">
          Comments
          <span className="button__icon" />
        </button>
      )}
      <div id="disqus_thread" />
    </div>
  )
}
