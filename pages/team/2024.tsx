import TeamCard from 'components/TeamCard'
import React from 'react'
import members from '../../data/member.js'
import PageLayout from 'components/PageLayout'
import { Separator } from 'components/ui/separator'
import { UsersRound } from 'lucide-react'


const Team = () => {
  const magazine = members.filter((member) => member.Team === 'Magazine')
  const scicomm = members.filter((member) => member.Team === 'Sci-Comm')
  const coordinators = members.filter(
    (member) => member.Roles === 'Coordinator',
  )
  const chiefeditors = members.filter(
    (member) => member.Roles === 'Chief-Editor',
  )

  // Sorting all by alphabetical order
  const field = 'Name'
  magazine.sort((a, b) =>
    (a[field] || '').toString().localeCompare((b[field] || '').toString()),
  )
  scicomm.sort((a, b) =>
    (a[field] || '').toString().localeCompare((b[field] || '').toString()),
  )
  coordinators.sort((a, b) =>
    (a[field] || '').toString().localeCompare((b[field] || '').toString()),
  )
  chiefeditors.sort((a, b) =>
    (a[field] || '').toString().localeCompare((b[field] || '').toString()),
  )

  return (
    <PageLayout>
      <div className="overflow-x-hidden relative">
        <div className="min-h-screen font-sfbold w-full grid items-center z-[10] p-6 justify-center md:p-24">
          <h1 className=" flex flex-col items-center gap-4 justify-center drop-shadow-xl font-bold text-center text-4xl mt-12 md:text-6xl bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-stroke stroke-black px-4 py-2 text-transparent rounded-xl w-fit mx-auto  z-[10]">
            The Team{' '}2024
          <Separator className="w-[70%] h-[2px] bg-gradient-to-l from-violet-800 to-sky-500" />
          </h1>

          <div className=" mt-8  md:mt-12  mx-auto p-4 z-[10]">
            <h1 className="font-semibold drop-shadow-lg text-center text-4xl md:text-5xl text-transparent bg-gradient-to-l from-violet-800 to-sky-500 bg-clip-text">
              Coordinators
            </h1>
            <Separator className="w-[70%] h-[2px] bg-gradient-to-l from-violet-800 to-sky-500" />
          </div>
          <TeamMembers members={coordinators} />
          <div className="mx-auto mt-6">
            <h1 className="font-bold text-4xl md:text-5xl  mt-12 mx-auto  bg-gradient-to-tr bg-clip-text from-blue-800 to-pink-500 text-transparent w-fit rounded-xl text-center z-[10]  drop-shadow-lg">
              Chief-Editors
            </h1>
            <Separator className="w-[70%] h-[2px] bg-purple-500" />
          </div>
          <TeamMembers members={chiefeditors} />


          <div className="mx-auto mt-12">
          <h1 className="font-semibold drop-shadow-lg text-center text-4xl md:text-5xl text-transparent bg-gradient-to-l from-violet-800 to-sky-500 bg-clip-text">
            Sci-Comm Team
          </h1>
          <Separator className="w-[70%] h-[2px] bg-blue-500" />
          </div>
          <TeamMembers members={scicomm} />


          <div className="mx-auto mt-12">
          <h1 className="font-bold text-4xl md:text-5xl  mt-12 mx-auto  bg-gradient-to-tr bg-clip-text from-blue-800 to-pink-500 text-transparent w-fit rounded-xl text-center z-[10]  drop-shadow-lg">
            Magazine Team
          </h1>
          <Separator className="w-[70%] h-[2px] bg-purple-500" />

          </div>
          <TeamMembers members={magazine} />
        </div>
      </div>
    </PageLayout>
  )
}

export default Team

const TeamMembers = ({ members }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-${members.length > 3 ? '3' : '2'} gap-8   z-[10]`}
    >
      {members.map((member, index) => (
        <TeamCard key={index} memberInfo={member} />
      ))}
    </div>
  )
}
