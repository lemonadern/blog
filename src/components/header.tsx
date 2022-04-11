import { SITE_NAME } from '@/lib/constants'
import { TWITTER_URL, GITHUB_URL } from '@/lib/constants'
import { FaTwitter, FaGithub } from 'react-icons/fa'
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
      <div className="flex flex-row items-center gap-8 text-xl">
        <a href={TWITTER_URL}><FaTwitter /></a>
        <a href={GITHUB_URL}><FaGithub /></a>
      </div>
    </div>
  )
}

export default Header
