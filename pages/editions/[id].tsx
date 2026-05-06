import { getAllEditions, getClient } from 'lib/sanity.client'
import { Editions } from 'lib/sanity.queries'
import { GetStaticProps, GetStaticPaths } from 'next'
import PageLayout from 'components/PageLayout'

export default function EditionReader({ edition }: { edition: Editions }) {
  if (!edition) return <div>Edition not found</div>
  return (
    <PageLayout>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center py-8">
        <h1 className="text-white text-3xl font-bold mb-6">{edition.title}</h1>
        <div className="w-full max-w-5xl h-[85vh]">
          <iframe
            src={edition.pdf_download_url}
            className="w-full h-full border-0"
            title={edition.title}
          />
        </div>
        <a 
          href={edition.pdf_download_url} 
          target="_blank"
          rel="noreferrer"
          className="mt-4 text-white underline text-sm"
        >
          Open PDF in new tab
        </a>
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
