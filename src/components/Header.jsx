import { styled } from 'styled-components';
import { Container } from '../styles/GlobalComponents';
import { theme } from '../styles/theme';
import ArrowUpCircle from './UI/ArrowUpCircle';
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { NavLink, useLocation } from 'react-router-dom';

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
  const location = useLocation();

  useEffect(() => {
    setMenuState({ menuOpened: false });
  }, [location]);

  useEffect(() => {
    if (menuState.menuOpened) {
      // Run animations to open menu
      mm.add(
        {
          // The function runs when any of this conditions are met
          isTablet: '(max-width: 654px)',
          isDesktop: '(min-width: 655px)',
        },
        (context) => {
          let { isTablet } = context.conditions;
          console.log(isTablet);

          tl.to('body', { duration: 0.01, css: { overflow: 'hidden' } })
            .to('.App', {
              duration: 1,
              y: isTablet ? '70svh' : '50svh',
              ease: 'expo.inOut',
            })
            .to('.hamburger-menu span', {
              duration: 0.6,
              delay: -1,
              scaleX: 0,
              transformOrigin: '50% 0%',
              ease: 'expo.inOut',
            })
            .to('#Path_1', {
              duration: 0.4,
              delay: -0.6,
              css: {
                strokeDashoffset: 10,
                strokeDasharray: 5,
              },
            })
            .to('#Path_2', {
              duration: 0.4,
              delay: -0.6,
              css: {
                strokeDashoffset: 10,
                strokeDasharray: 20,
              },
            })
            .to('#Line_1', {
              duration: 0.4,
              delay: -0.6,
              css: {
                strokeDashoffset: 40,
                strokeDasharray: 18,
              },
            })
            .to('#circle', {
              duration: 0.6,
              delay: -0.8,
              css: {
                strokeDashoffset: 0,
              },
            })
            .to('.hamburger-menu-close', {
              duration: 0.6,
              delay: -0.8,
              css: {
                display: 'block',
              },
            });
        }
      );
    } else {
      // Run close menu animations
      tl.to('.App', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut',
      })
        .to('#circle', {
          duration: 0.6,
          delay: -0.6,
          css: {
            strokeDashoffset: -193,
            strokeDasharray: 227,
          },
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 10,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 40,
          },
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -0.6,
          scaleX: 1,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('.hamburger-menu-close', {
          duration: 0,
          css: { display: 'none' },
        })
        .to('body', { css: { overflow: 'auto' } });
    }
  }, [menuState.menuOpened]);

  return (
    <HeaderWrapper>
      <Container>
        <Row className="row">
          <div className="logo">
            <NavLink to="/">AGENCY.</NavLink>
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
