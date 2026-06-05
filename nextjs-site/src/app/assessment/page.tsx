'use client'

import { useEffect } from 'react'
import Link from 'next/link'

// The care quiz moved from /assessment to /is-it-time.
// This client redirect keeps old links and bookmarks working.
export default function AssessmentRedirect() {
  useEffect(() => {
    window.location.replace('/is-it-time')
  }, [])

  return (
    <p style={{ padding: '8rem 1.5rem', textAlign: 'center' }}>
      This page has moved. Redirecting you to{' '}
      <Link href="/is-it-time">Is It Time?</Link>
    </p>
  )
}
