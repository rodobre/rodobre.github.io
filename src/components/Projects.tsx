import Image from 'next/image'
import { Section, SectionItem } from './Section'
import { BeakerIcon } from '@heroicons/react/24/outline'
import logoGithub from '@/images/logos/github.png'
import logoStradal from '@/images/logos/stradal.jpeg'

interface Project extends SectionItem {
  company: string
  titleComponent: React.ReactNode
  url: string
}

function Project({ project }: { project: Project }) {
  let startLabel =
    typeof project.start === 'string' ? project.start : project.start.label
  let startDate =
    typeof project.start === 'string' ? project.start : project.start.dateTime

  return (
    <a
      href={project.url}
      className="flex gap-4"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={project.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Project Name</dt>
        <dd className="w-full flex-none text-base font-semibold">
          {project.company}
        </dd>
        <dt className="sr-only">Description</dt>
        {project.titleComponent}
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs" aria-label={`${startLabel}`}>
          <time dateTime={startDate}>{startLabel}</time>{' '}
        </dd>
      </dl>
    </a>
  )
}

export const Projects = () => {
  const header = (
    <h2 className="flex text-sm font-semibold ">
      <BeakerIcon className="h-6 w-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500" />
      <span className="ml-3">Projects</span>
    </h2>
  )

  const footer = <></>

  let projects: Array<Project> = [
    {
      company: 'zexpress',
      title: '',
      titleComponent: (
        <dd className="text-xs max-w-[90%]">
          A minimal Express.js wrapper with rich TypeScript support, advanced
          logging, chainable middlewares and filesystem routing
        </dd>
      ),
      logo: logoGithub,
      start: '2024',
      end: '',
      url: 'https://github.com/rodobre/zexpress',
    },
    {
      company: 'DNS Detective',
      title: '',
      titleComponent: (
        <dd className="text-xs max-w-[90%]">
          A subdomain enumeration aggregator which integrates with popular
          subdomain lookup services like SecurityTrails and tools like OneForAll
        </dd>
      ),
      logo: logoGithub,
      start: '2024',
      end: '',
      url: 'https://github.com/rodobre/dns-detective',
    },
    {
      company: 'Enumerator',
      title: '',
      titleComponent: (
        <dd className="text-xs max-w-[90%]">
          A directory/file enumeration script with rich features such as request
          customization and proxying
        </dd>
      ),
      logo: logoGithub,
      start: '2023',
      end: '',
      url: 'https://github.com/rodobre/enumerator',
    },
    {
      company: 'Interfuzz',
      title: '',
      titleComponent: (
        <dd className="text-xs max-w-[90%]">
          A network fuzzer written for Linux which floods an endpoint with
          malformed packets so as to detect vulnerabilities in network packet
          handling.
        </dd>
      ),
      logo: logoGithub,
      start: '2019',
      end: '',
      url: 'https://github.com/rodobre/interfuzz',
    },
  ]

  const renderItem = (project: Project) => <Project project={project} />

  return (
    <Section
      header={header}
      footer={footer}
      items={projects}
      renderItem={renderItem}
    />
  )
}
