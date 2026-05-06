import { getAllEditions, getClient } from 'lib/sanity.client'
import { Editions } from 'lib/sanity.queries'
import { GetStaticProps, GetStaticPaths } from 'next'
import PageLayout from 'components/PageLayout'

export default function EditionReader({ edition }: { edition: Editions }) {
  if (!edition) return <div>Edition not found</div>
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8 px-4">
        <h1 className="text-white text-3xl font-bold mb-6">{edition.title}</h1>
        {edition.flipUrl ? (
          <div style={{ position: 'relative', paddingTop: 'max(60%, 324px)', width: '100%', height: 0 }}>
            <iframe
              style={{ position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 }}
              src={edition.flipUrl}
              title={edition.title}
              seamless
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
            />
          </div>
        ) : (
          <div className="text-white text-center">
            <p className="mb-4">No flip reader available for this edition.</p>
            
              href={edition.pdf_download_url}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              Download PDF instead
            </a>
          </div>
        )}
      </div>
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = getClient()
  const editions = await getAllEditions(client)
  const paths = editions.map((e: Editions) => ({
    params: { id: e._id },
  }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const client = getClient()
  const editions = await getAllEditions(client)
  const edition = editions.find((e: Editions) => e._id === params?.id) || null
  return { props: { edition } }
}
