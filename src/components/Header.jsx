import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import { Menu, Heading } from '../styles/components/header'

const Header = ({ title }) => {
  const [isMenuMobileToggle, setMenuMobileToggle] = useState(false)

  const onHandleMenu = () => setMenuMobileToggle(!isMenuMobileToggle)

  // se tiver problema com scrool no menu mobile, ative esse código
  useEffect(() => {
    document.body.style.overflowY = isMenuMobileToggle ? 'hidden' : 'auto'
  })

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Heading>
        <Menu isMenuMobileToggle={isMenuMobileToggle}>
          <div>
            <Image
              src="/icons/logo.png"
              width={190}
              height={120}
              quality={100}
              alt="Dunder Mifflin Logo"
              className="logo"
            />
          </div>

          <nav>
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
            <Link href="/team">
              <a>★TEAM★</a>
            </Link>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </nav>

          <button onClick={onHandleMenu}>
            <Image
              src={!isMenuMobileToggle ? '/icons/openMenu.svg' : '/icons/closeMenu.svg'}
              alt={!isMenuMobileToggle ? 'Open Menu' : 'Close Menu'}
              width={40}
              height={40}
            />
          </button>
        </Menu>
      </Heading>
    </>
  )
}

export default Header
