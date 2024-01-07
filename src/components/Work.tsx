import Image from 'next/image'
import logoCertiK from '@/images/logos/certik.jpeg'
import logoSFS from '@/images/logos/sfstandard.png'
import logoKPMG from '@/images/logos/kpmg.jpeg'
import logoToptal from '@/images/logos/toptal.png'
import logoPhase from '@/images/logos/phase.png'
import logoBitdefender from '@/images/logos/bitdefender.png'
import { Button } from '@nextui-org/react'
import { Section, SectionItem } from './Section'

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

interface Role extends SectionItem {
  company: string
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-base font-semibold">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

export const Work = () => {
  let resume: Array<Role> = [
    {
      company: 'CertiK',
      title: 'Security Researcher',
      logo: logoCertiK,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'San Francisco Standard',
      title: 'Founding Full-Stack Engineer',
      logo: logoSFS,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Toptal',
      title: 'Full-Stack Engineer',
      logo: logoToptal,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Phase',
      title: 'Founder & Full-Stack Engineer',
      logo: logoPhase,
      start: '2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'KPMG',
      title: 'Cyber Security Consultant',
      logo: logoKPMG,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Bitdefender',
      title: 'C++ Software Engineer',
      logo: logoBitdefender,
      start: '2018',
      end: '2019',
    },
  ]

  const header = (
    <h2 className="flex text-sm font-semibold ">
      <BriefcaseIcon className="h-6 w-6 flex-none" />
      <span className="ml-3">Work</span>
    </h2>
  )

  const footer = (
    <></>
    // <Button href="#" color="primary" className="group mt-6 w-full">
    //   Download CV
    //   {/* <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" /> */}
    // </Button>
  )

  const renderItem = (role: Role) => <Role role={role} />

  return (
    <Section
      header={header}
      footer={footer}
      items={resume}
      renderItem={renderItem}
    />
  )
}
