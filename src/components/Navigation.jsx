import { NavLink } from 'react-router-dom';
import { Container } from '../styles/GlobalComponents';
import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const NavigationWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: -1px;
  width: 100%;
  height: 100%;
  z-index: 1;
  /* display: none; */
  overflow: hidden;
  background: ${theme.color.yellow};

  a {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      display: block;
      margin-top: 5px;
      right: 0;
      background: ${theme.color.black};
      transition: 0.4s ease;
    }
    &:hover {
      &:after {
        width: 100%;
        left: 0;
        background: ${theme.color.black};
      }
    }
  }

  .nav-columns {
    transform: translateY(125px);
    display: flex;
    padding: 0 32px;

    @media (max-width: 654px) {
      flex-direction: column;
    }

    @media (max-width: ${theme.breakpoints.phone}) {
      padding: 0 16px;
    }
    .nav-column {
      width: 45%;

      @media (max-width: 654px) {
        width: 100%;
      }

      &:last-child {
        width: 55%;

        @media (max-width: 654px) {
          width: 100%;
        }
      }

      .nav-label {
        margin-bottom: 3rem;
        font-size: 1.2rem;

        @media (max-width: ${theme.breakpoints.tablet}) {
          margin-bottom: 1.4rem;
          font-size: 1rem;
        }

        @media (max-width: ${theme.breakpoints.phone}) {
          margin-bottom: 1.2rem;
          font-size: 0.875rem;
        }
      }
      .nav-links {
        li {
          margin-bottom: 2.8rem;

          @media (max-width: ${theme.breakpoints.phone}) {
            margin-bottom: 1.6rem;
          }

          a {
            font-weight: ${theme.fontWeight.medium};
            font-size: 2.8rem;
            text-decoration: none;
            color: ${theme.color.black};

            @media (max-width: ${theme.breakpoints.phone}) {
              font-size: 2rem;
            }
          }
        }
      }
      .nav-infos {
        display: flex;
        flex-wrap: wrap;

        @media (max-width: 654px) {
          justify-content: space-between;
        }
        .nav-info {
          width: 50%;
          &:nth-child(2),
          &:nth-child(3) {
            @media (max-width: 654px) {
              display: none;
            }
          }

          .nav-info-label {
            font-weight: ${theme.fontWeight.medium};
          }
          li {
            font-weight: ${theme.fontWeight.light};
            font-size: 1.4rem;
            margin-bottom: 1.2rem;
            @media (max-width: ${theme.breakpoints.tablet}) {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
            @media (max-width: ${theme.breakpoints.phone}) {
              font-size: 1rem;
              margin-bottom: 0.875rem;
            }
            a {
              text-decoration: none;
              color: ${theme.color.black};
            }
          }
        }
      }
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Container>
        <div className="nav-columns">
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink to="/case-studies" exact>
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink to="/approach" exact>
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" exact>
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/audit" exact>
                    Get a free audit
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Legal</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </NavigationWrapper>
  );
};

export default Navigation;
