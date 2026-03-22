import Link from 'next/link'

export default function BlogHeader({
  title,
  description,
  level,
}: {
  title: string
  description?: any[]
  level: 1 | 2
}) {
  switch (level) {
    case 1:
      return (
        <header className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">C</div>
            <span className="text-2xl font-black tracking-widest uppercase">CHRYSALIS.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/posts" className="hover:underline">Posts</Link>
            <Link href="/editions" className="hover:underline">Editions</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/submissions" className="hover:underline">Submissions</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/wikirace" className="hover:underline">WikiRace</Link>
          </nav>
        </header>
      )
    case 2:
      return (
        <header>
          <h2 className="mb-20 mt-8 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter text-pretty">
            <Link href="/" className="hover:underline">
              {title}
            </Link>
          </h2>
        </header>
      )
    default:
      throw new Error(
        `Invalid level: ${
          JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`,
      )
  }
}
