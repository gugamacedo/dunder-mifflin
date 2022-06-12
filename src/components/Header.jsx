import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import styled, { css } from 'styled-components'

const Heading = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 5px;

  @media (min-width: 1900px) {
    padding: 10px;
  }
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      padding: 20px;
      text-decoration: none;
      color: ${(props) => props.theme.colors.secondary};
      font-family: ${(props) => props.theme.fonts.primary};

      :hover {
        background-color: #01213a;
      }
    }
  }

  button {
    display: none;
    border: none;
  }

  @media (min-width: 1900px) {
    nav {
      a {
        padding: 30px;
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: 576px) {
    button {
      display: inline-block;
      background-color: inherit;
      z-index: 5;
    }

    div img {
      height: 70px !important;
    }

    nav {
      position: absolute;
      height: 90%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 4;
      background-color: ${(props) => props.theme.colors.primary};
      flex-direction: column;
      justify-content: space-evenly;

      opacity: 0;
      pointer-events: none;
      transition: 0.7s;
      transform: translateY(70px);

      ${({ isMenuMobileToggle }) =>
        isMenuMobileToggle &&
        css`
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0px);

          height: 100vh;
        `}
    }
  }
`

const Header = () => {
  const [isMenuMobileToggle, setMenuMobileToggle] = useState(false)

  const onHandleMenu = () => setMenuMobileToggle(!isMenuMobileToggle)

  // se tiver problema com scrool no menu mobile, ative esse código
  useEffect(() => {
    document.body.style.overflowY = isMenuMobileToggle ? 'hidden' : 'auto'
  })

  return (
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
  )
}

export default Header
