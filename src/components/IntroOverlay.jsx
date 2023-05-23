import { styled } from 'styled-components';
import { theme } from '../styles/theme';

const IntroOverlayWrapper = styled.div`
  .top {
    position: absolute;
    height: 50svh;
    width: 100%;
    z-index: 8;
    .overlay-top {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background-color: ${theme.color.black};
      bottom: 0;
      left: 0;
      right: 0;

      @media (max-width: ${theme.breakpoints.tablet}) {
        width: 100vw;
      }

      &:nth-child(2) {
        left: 33.333%;

        @media (max-width: ${theme.breakpoints.tablet}) {
          display: none;
        }
      }

      &:nth-child(3) {
        left: 66.666%;

        @media (max-width: ${theme.breakpoints.tablet}) {
          display: none;
        }
      }
    }
  }
  .bottom {
    position: absolute;
    height: 50svh;
    bottom: 0;
    width: 100%;
    z-index: 8;
    .overlay-bottom {
      position: absolute;
      height: 100%;
      width: 33.333vw;
      background-color: ${theme.color.black};
      bottom: 0;
      right: 66.666%;

      @media (max-width: ${theme.breakpoints.tablet}) {
        right: 0;
        width: 100vw;
      }

      &:nth-child(2) {
        right: 33.333%;

        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 100vw;
          top: 100%;
          right: 0;
        }
      }

      &:nth-child(3) {
        right: 0;

        @media (max-width: ${theme.breakpoints.tablet}) {
          width: 100vw;
          top: 200%;
        }
      }
    }
  }
`;

const IntroOverlay = () => {
  return (
    <>
      <IntroOverlayWrapper>
        <div className="top">
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
          <div className="overlay-top"></div>
        </div>
        <div className="bottom">
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
          <div className="overlay-bottom"></div>
        </div>
      </IntroOverlayWrapper>
    </>
  );
};

export default IntroOverlay;
