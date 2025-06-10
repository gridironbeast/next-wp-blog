import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-center mt-8'>
        <p>&copy; 2025 Alina &middot; Build with love &middot; <Link href={'/sitemap'}>
          Sitemap
        </Link></p>
    </footer>
  )
}
