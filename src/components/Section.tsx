import { type ImageProps } from 'next/image'

export interface SectionItem {
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

export interface SectionProps<T extends SectionItem> {
  header: React.ReactNode
  items: T[]
  renderItem: (item: T, key: number) => React.ReactNode
  footer: React.ReactNode
}

export function Section<T extends SectionItem>(props: SectionProps<T>) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      {props.header}
      <ol className="mt-6 space-y-4">
        {props.items.map((item: T, itemIndex) => (
          <li key={itemIndex}>{props.renderItem(item, itemIndex)}</li>
        ))}
      </ol>
      {props.footer}
    </div>
  )
}
