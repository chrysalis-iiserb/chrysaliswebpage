import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getClient, getTeamByYear, getSettings } from 'lib/sanity.client'
import { TeamMember, Settings } from 'lib/sanity.queries'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import PageLayout from 'components/PageLayout'
import IndexPageHead from 'components/IndexPageHead'

interface Props {
  team: TeamMember[]
  settings: Settings
  year: number
}

const SECTIONS = ['Coordinator', 'Chief-Editor', 'Sci-Comm', 'Magazine']
const SECTION_LABELS: Record<string, string> = {
  'Coordinator': 'Coordinators',
  'Chief-Editor': 'Chief-Editors',
  'Sci-Comm': 'Sci-Comm Team',
  'Magazine': 'Magazine Team',
}

export default function TeamPage({ team, settings, year }: Props) {
  return (
    <PageLayout>
      <IndexPageHead settings={settings} />
      <div className="min-h-screen bg-white px-6 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-sfheavy text-center mb-16">
          The Team <span className="text-blue-500">{year}</span>
        </h1>
        {SECTIONS.map(section => {
          const members = team.filter(m => m.team === section)
          if (!members.length) return null
          return (
            <div key={section} className="mb-16">
              <h2 className="text-3xl font-sfheavy mb-8 border-b pb-2">{SECTION_LABELS[section]}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {members.map(member => (
                  <div key={member._id} className="flex flex-col items-center text-center">
                    {member.photo?.asset?._ref && (
                      <Image
                        src={urlForImage(member.photo.asset._ref).width(300).height(300).url()}
                        width={200} height={200}
                        alt={member.name}
                        className="rounded-full object-cover mb-4 drop-shadow-md"
                      />
                    )}
                    <h3 className="text-xl font-sfheavy">{member.name}</h3>
                    <p className="text-blue-500 font-sfbold text-sm mb-2">{member.role}</p>
                    {member.bio && <p className="text-gray-600 text-sm mb-3">{member.bio}</p>}
                    <div className="flex gap-3 text-sm">
                      {member.email && <a href={`mailto:${member.email}`} className="underline text-gray-500">Email</a>}
                      {member.instagram && <a href={member.instagram} target="_blank" rel="noreferrer" className="underline text-gray-500">Instagram</a>}
                      {member.linkedin && <a href={member.linkedin} target="_blank" rel="noreferrer" className="underline text-gray-500">LinkedIn</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { year: '2026' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const year = Number(params?.year)
  const client = getClient()
  const [team, settings] = await Promise.all([
    getTeamByYear(client, year),
    getClient().fetch('*[_type == "settings"][0]'),
  ])
  return { props: { team, settings, year } }
}
