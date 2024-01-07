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
      <NavbarBrand></NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Speaking
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
          >
            {prefersDarkMode ? <DarkIcon /> : <LightIcon />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
