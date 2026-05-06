import React from 'react'
import { getAllEditions, getClient } from 'lib/sanity.client'
import { Editions } from 'lib/sanity.queries'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function EditionReader({ edition }: { edition: Editions }) {
  if (!edition) return React.createElement('div', null, 'Edition not found')
  return React.createElement(
    'div',
    { className: 'min-h-screen bg-gray-900 flex flex-col items-center py-8 px-4' },
    React.createElement('h1', { className: 'text-white text-3xl font-bold mb-6' }, edition.title),
    edition.flipUrl
      ? React.createElement(
          'div',
          { style: { position: 'relative', paddingTop: 'max(60%, 324px)', width: '100%', height: 0 } },
          React.createElement('iframe', {
            style: { position: 'absolute', border: 'none', width: '100%', height: '100%', left: 0, top: 0 },
            src: edition.flipUrl,
            title: edition.title,
            scrolling: 'no',
            frameBorder: '0',
            allowFullScreen: true,
          })
        )
      : React.createElement(
          'div',
          { className: 'text-white text-center' },
          React.createElement('p', { className: 'mb-4' }, 'No flip reader available.'),
          React.createElement('a', { href: edition.pdf_download_url, target: '_blank', rel: 'noreferrer', className: 'underline' }, 'Download PDF instead')
        )
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
