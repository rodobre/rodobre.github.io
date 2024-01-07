import Image from 'next/image'
import { Section, SectionItem } from './Section'
import { AcademicCapIcon } from '@heroicons/react/24/outline'
import logoECSC from '@/images/logos/ecsc.png'
import logoDCTF from '@/images/logos/defcon.png'
import logoH8 from '@/images/logos/h8.png'
import logoCSAW from '@/images/logos/csaw.jpeg'
import logoBH from '@/images/logos/bh_asia.png'

interface Achievement extends SectionItem {
  company: string
  titleComponent: React.ReactNode
}

function Achievement({ achievement }: { achievement: Achievement }) {
  let startLabel =
    typeof achievement.start === 'string'
      ? achievement.start
      : achievement.start.label
  let startDate =
    typeof achievement.start === 'string'
      ? achievement.start
      : achievement.start.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={achievement.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Event</dt>
        <dd className="w-full flex-none text-base font-semibold">
          {achievement.company}
        </dd>
        <dt className="sr-only">Description</dt>
        {achievement.titleComponent}
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs" aria-label={`${startLabel}`}>
          <time dateTime={startDate}>{startLabel}</time>{' '}
        </dd>
      </dl>
    </li>
  )
}

export const Achievements = () => {
  const header = (
    <h2 className="flex text-sm font-semibold ">
      <AcademicCapIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <span className="ml-3">Achievements</span>
    </h2>
  )

  const footer = <></>

  let achievements: Array<Achievement> = [
    {
      company: 'Black Hat Asia 2024',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          Research on Web3 security with CertiK
          <br />
          Speaker & Researcher
        </dd>
      ),
      logo: logoBH,
      start: '2024',
      end: '',
    },
    {
      company: 'Google CTF - Hackceler8 Finals',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          2<sup>nd</sup> place with WreckTheLine
        </dd>
      ),
      logo: logoH8,
      start: '2021',
      end: '',
    },
    {
      company: 'DEFCON CTF Finals',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          8<sup>th</sup> place with WreckTheLine
        </dd>
      ),
      logo: logoDCTF,
      start: '2021',
      end: '',
    },
    {
      company: 'CSAW Europe CTF Finals',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          2<sup>nd</sup> place with WreckTheLine
        </dd>
      ),
      logo: logoCSAW,
      start: '2020',
      end: '',
    },
    {
      company: 'European Cyber Security Challenge',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          1<sup>st</sup> place with Team Romania
        </dd>
      ),
      logo: logoECSC,
      start: '2019',
      end: '',
    },
  ]

  const renderItem = (achievement: Achievement) => (
    <Achievement achievement={achievement} />
  )

  return (
    <Section
      header={header}
      footer={footer}
      items={achievements}
      renderItem={renderItem}
    />
  )
}
