import { styled } from 'styled-components';
import { Container } from '../styles/GlobalComponents';
import { theme } from '../styles/theme';

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

  nav {
    width: 25px;
    @media (max-width: ${theme.breakpoints.phone}) {
      width: 20px;
    }
    span {
      margin-bottom: 0.3rem;
      background-color: ${theme.color.black};
      height: 2px;
      width: 100%;
      display: block;
    }
  }
`;

const Row = styled.div`
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Row className="row">
          <div className="logo">
            <a href="/">AGENCY.</a>
          </div>
          <nav>
            <span></span>
            <span></span>
          </nav>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
