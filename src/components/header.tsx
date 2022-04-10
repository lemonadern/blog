import { SITE_NAME } from '@/lib/constants'
import Link from 'next/link'

const Header = () => {
  return (
    <div className="flex justify-between mb-20 mt-6">
      <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">{SITE_NAME}</a>
        </Link>
        .
      </h2>
      <button>push me</button>
    </div>
  )
}

export default Header
