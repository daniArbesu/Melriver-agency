import { styled } from 'styled-components';
import { Container } from '../styles/GlobalComponents';
import { theme } from '../styles/theme';
import ArrowUpCircle from './UI/ArrowUpCircle';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const HeaderWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: 8rem;
  z-index: 4;

  @media (max-width: ${theme.breakpoints.phone}) {
    height: 6rem;
  }
  .logo {
    a {
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
      color: ${theme.color.black};
      text-decoration: none;
      font-weight: ${theme.fontWeight.bold};
    }
  }

  .nav-toggle {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoints.tablet}) {
      margin-right: 24px;
    }

    @media (max-width: ${theme.breakpoints.tablet}) {
      margin-right: 16px;
      width: 20px;
    }
    .hamburger-menu {
      width: 25px;

      span {
        margin-bottom: 0.3rem;
        background-color: ${theme.color.black};
        height: 2px;
        width: 100%;
        display: block;
      }
    }

    .hamburger-menu-close {
      position: absolute;
      display: none;
      svg {
        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 56px;
        }

        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 48px;
        }
      }
    }
  }
`;

const Row = styled.div`
  justify-content: space-between;
  align-items: center;
`;

const tl = gsap.timeline();
const mm = gsap.matchMedia();

const Header = () => {
  const [menuState, setMenuState] = useState({ menuOpened: false });

  useEffect(() => {
    if (menuState.menuOpened) {
      // Run animations to open menu
      gsap.to('nav', { css: { display: 'block' } });
      gsap.to('body', { css: { overflow: 'hidden' } });

      mm.add('(max-width: 654px)', () => {
        tl.to('.App', { duration: 1, y: '70svh', ease: 'expo.inOut' });
      });
      mm.add('(min-width: 655px)', () => {
        tl.to('.App', { duration: 1, y: '50svh', ease: 'expo.inOut' });
      });
    } else {
      // Run close menu animations
    }
  }, [menuState.menuOpened]);

  return (
    <HeaderWrapper>
      <Container>
        <Row className="row">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <div className="nav-toggle">
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>
            <div
              onClick={() => setMenuState({ menuOpened: false })}
              className="hamburger-menu-close"
            >
              <ArrowUpCircle />
            </div>
          </div>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
