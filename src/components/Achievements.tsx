import Image from 'next/image'
import { Section, SectionItem } from './Section'
import { AcademicCapIcon } from '@heroicons/react/24/outline'

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
    <div className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={achievement.logo}
          alt="Image depicting a contest or a company where Robert has achieved something notable"
          className="h-7 w-7 rounded-full"
          width={30}
          height={30}
          unoptimized
          loading="lazy"
        />
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
    </div>
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
      company: 'National Cyber Team Sponsor',
      title: '',
      titleComponent: (
        <dd className="text-xs">
          Official sponsor of the{' '}
          <a
            href="https://www.rocsc.ro/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Romanian Cyber Security Challenge 2024
          </a>
        </dd>
      ),
      logo: '/images/logos/phase.webp',
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
      logo: '/images/logos/h8.webp',
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
      logo: '/images/logos/defcon.webp',
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
      logo: '/images/logos/csaw.webp',
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
      logo: '/images/logos/ecsc.webp',
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
