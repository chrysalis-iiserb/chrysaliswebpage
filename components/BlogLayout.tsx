import AlertBanner from 'components/AlertBanner'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mb-12 md:mb-0">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
