import { styled } from 'styled-components';
import { ContainerFluid } from '../styles/GlobalComponents';
import ArrowRight from './UI/ArrowRight';
import ArrowLeft from './UI/ArrowLeft';
import { caseStudies } from '../utils/cases';
import { theme } from '../styles/theme';

const CasesWrapper = styled.section`
  height: 50svh;

  .cases-navigation {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    padding: 32px;

    @media (max-width: ${theme.breakpoints.tablet}) {
      display: none;
    }

    .cases-arrow {
      background: rgba(0, 0, 0, 0.4);
      height: 4.5rem;
      width: 4.5rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: ${theme.color.white};
        height: 28px;
        width: 28px;
      }
      &.disabled {
        opacity: 0.3;
      }
    }
  }
  .row {
    @media (max-width: ${theme.breakpoints.tablet}) {
      flex-direction: column;
    }
    .case {
      position: relative;
      background: ${theme.color.black};
      cursor: pointer;

      &:hover {
        .case-image {
          opacity: 0.4;
        }
      }
      .case-details {
        position: relative;
        width: 33.333vw;
        height: 50svh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        z-index: 1;

        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 100vw;
        }

        @media (max-width: ${theme.breakpoints.phone}) {
          padding: 1rem;
        }

        span {
          margin-top: 156px;
          font-size: 1.6rem;
          opacity: 0.8;
          color: ${theme.color.white};
          font-weight: ${theme.fontWeight.medium};

          @media (max-width: ${theme.breakpoints.desktop}) {
            font-size: 1.4rem;
          }

          @media (max-width: ${theme.breakpoints.phone}) {
            font-size: 1.2rem;
            line-height: 2.2rem;
          }
        }

        h2 {
          font-size: 2.4rem;
          line-height: 3.4rem;
          width: 85%;
          margin-top: 1rem;
          color: ${theme.color.white};

          @media (max-width: ${theme.breakpoints.desktop}) {
            font-size: 2rem;
            line-height: 2.4rem;
          }

          @media (max-width: ${theme.breakpoints.phone}) {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 8px;
          }
        }
      }
      .case-image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        opacity: 0.65;
        transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

const Cases = () => {
  return (
    <CasesWrapper>
      <ContainerFluid>
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <ArrowLeft />
          </div>
          <div className="cases-arrow next">
            <ArrowRight />
          </div>
        </div>
        <div className="row">
          {caseStudies.map(({ id, title, subtitle, img }) => (
            <div className="case" key={id}>
              <div className="case-details">
                <span>{subtitle}</span>
                <h2>{title}</h2>
              </div>
              <div className="case-image">
                <img src={`/${img}.png`} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </ContainerFluid>
    </CasesWrapper>
  );
};

export default Cases;
