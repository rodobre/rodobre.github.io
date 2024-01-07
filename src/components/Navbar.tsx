'use client'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'
import { DarkIcon, LightIcon } from './DarkModeIcons'
import { useEffect, useState } from 'react'

export const LayoutNavbar = () => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false)
  const getPrefersDarkMode = () =>
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  useEffect(() => {
    const doesUserPreferDarkMode = getPrefersDarkMode()
    setPrefersDarkMode(doesUserPreferDarkMode)
  }, [])

  useEffect(() => {
    prefersDarkMode
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark')
  }, [prefersDarkMode])

  return (
    <Navbar>
      <NavbarBrand />
      <NavbarContent className="flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href={`https://twitter.com/messages/compose?recipient_id=1532393087259009025&text=${encodeURIComponent(
              'What’s the best thing about Switzerland? I don’t know, but the flag is a big plus.'
            )}`}
            color="foreground"
            isExternal
            showAnchorIcon
          >
            Let&apos;s chat!
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            isIconOnly
            className="bg-transparent"
            onClick={() =>
              setPrefersDarkMode((previousState) => !previousState)
            }
            aria-label="Toggle dark mode"
          >
            <p className="sr-only">Toggle dark mode</p>
            {prefersDarkMode ? <DarkIcon /> : <LightIcon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
