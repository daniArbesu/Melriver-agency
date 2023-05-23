import { styled } from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  width: 1560px;
  min-width: 1560px;
  margin: 0 auto;
  height: 100%;
  @media (max-width: 1560px) {
    width: 1280px;
    min-width: 1280px;
  }
  @media (max-width: ${theme.breakpoints.desktop}) {
    width: 1080px;
    min-width: 1080px;
  }
  @media (max-width: 1080px) {
    width: 100%;
    min-width: 100%;
  }
  .row {
    display: flex;
    height: 100%;
    padding: 0 32px;
    @media (max-width: ${theme.breakpoints.phone}) {
      padding: 0 16px;
    }
  }
  .v-center {
    align-items: center;
  }
  .space-between {
    justify-content: space-between;
  }
`;

export const ContainerFluid = styled.div`
  width: 100%;
  height: 100%;

  .row {
    display: flex;
    height: 100%;
  }
`;

export const Page = styled.main`
  height: 100vh;
  width: 100%;
  background: ${theme.color.white};
  .row {
    display: flex;
    align-items: center;
  }
`;
