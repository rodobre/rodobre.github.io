'use client'
import { Achievements } from '@/components/Achievements'
import { Projects } from '@/components/Projects'
import { Socials } from '@/components/Socials'
import { Work } from '@/components/Work'
import { NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex-auto bg-background">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl flex flex-col gap-6">
                  <Image
                    src="/images/robert.webp"
                    className="aspect-[1.33333] w-64 rounded-2xl"
                    alt="Portrait of Robert in Tromsø, Norway with a beautiful Aurora Borealis in the background"
                    loading="lazy"
                    width={256}
                    height={192}
                    unoptimized
                  />
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Software engineer, security researcher and aspiring
                    early-stage founder.
                  </h1>
                  <p className="text-base">
                    I’m Robert, a passionate software engineer and security
                    researcher based in Bucharest. Founding engineer for several
                    US companies, avid bug-bounty hunter and security engineer,
                    developed multiple open-source attack surface mapping tools.
                    Working on numerous personal projects, ranging from complex
                    decision engines to simplified collaborative editing.
                  </p>
                  <Socials />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row gap-6 pt-6">
                    <Work />
                    <Achievements />
                  </div>
                  <Projects />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  )
}
