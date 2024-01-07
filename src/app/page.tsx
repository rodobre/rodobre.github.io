'use client'
import { Socials } from '@/components/Socials'
import { Work } from '@/components/Work'
import { Avatar, NextUIProvider } from '@nextui-org/react'

export default function Home() {
  return (
    <NextUIProvider>
      <main className="flex-auto min-h-screen bg-background">
        <div className="sm:px-8 mt-9">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="max-w-2xl flex flex-col gap-6">
                  <Avatar
                    src="https://media.licdn.com/dms/image/D4D03AQE0vpcP8dVaxg/profile-displayphoto-shrink_400_400/0/1690742921814?e=1710374400&v=beta&t=NZOui0bl9Nnb5kfpFTsE-9knBmOjgyGO62Ve0cAqY3k"
                    size="lg"
                  />
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Software engineer, security researcher and aspiring
                    early-stage founder.
                  </h1>
                  <p className="text-base">
                    I’m Robert, a passionate software engineer and security
                    researcher based in Bucharest. Founding engineer for several
                    US companies, published research on Web3 security, avid
                    bug-bounty hunter, developed multiple open-source attack
                    surface mapping tools. Working on numerous personal
                    projects, ranging from real estate to collaborative editing.
                  </p>
                  <Socials />
                  <Work />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </NextUIProvider>
  )
}
