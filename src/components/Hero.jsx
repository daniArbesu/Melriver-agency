import { Container } from '../styles/GlobalComponents';
import ArrowRight from './UI/ArrowRight';
import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const HeroWrapper = styled.section`
  height: 50svh;
  background-color: ${theme.color.white};

  .row {
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 3rem;
      line-height: 4.2rem;
      font-weight: ${theme.fontWeight.bold};
      z-index: 10;
      color: ${theme.color.white};
      mix-blend-mode: difference; // makes the color opposite to the background color

      @media (max-width: ${theme.breakpoints.tablet}) {
        font-size: 2.4rem;
        line-height: 3rem;
      }

      @media (max-width: ${theme.breakpoints.phone}) {
        margin-top: 72px;
        font-size: 1.7rem;
        line-height: 2.2rem;
      }
      .line {
        margin-bottom: 8px;
        height: 56px;
        position: relative;
        overflow: hidden;

        @media (max-width: ${theme.breakpoints.tablet}) {
          height: 48px;
        }

        @media (max-width: ${theme.breakpoints.phone}) {
          height: 32px;
        }

        span {
          position: absolute;
        }
      }
    }
    .btn-row {
      width: 256px;
      position: relative;
      z-index: 2;
      a {
        font-size: 1.6rem;
        color: ${theme.color.black};
        text-decoration: none;

        display: flex;
        align-items: center;
        font-weight: ${theme.fontWeight.medium};

        @media (max-width: ${theme.breakpoints.tablet}) {
          font-size: 1.3rem;
        }

        @media (max-width: ${theme.breakpoints.phone}) {
          font-size: 1.1rem;
        }

        svg {
          margin-left: 16px;
          border: 2px solid ${theme.color.black};
          padding: 12px;
          height: 24px;
          width: 24px;
          border-radius: 100px;
          transition: 0.4s ease-in-out;
          box-sizing: content-box;

          @media (max-width: ${theme.breakpoints.tablet}) {
            padding: 6px;
            width: 20px;
            height: 20px;
          }

          @media (max-width: ${theme.breakpoints.phone}) {
            padding: 4px;
            width: 16px;
            height: 16px;
          }
        }

        &:hover {
          svg {
            background: ${theme.color.black};
            color: ${theme.color.white};
          }
        }
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <Container>
        <div className="row">
          <h2>
            <div className="line">
              <span>Creating unique brands is</span>
            </div>
            <div className="line">
              <span>what we do.</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about us <ArrowRight className="arrow-right" />
            </a>
          </div>
        </div>
      </Container>
    </HeroWrapper>
  );
};

export default Hero;
