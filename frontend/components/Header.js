import Link from 'next/link';
import styled from 'styled-components';
import Navigation from './Navigation';

const Logo = styled.h1`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format: ('woff2');
  }
  font-size: 4rem;
  margin-left: 2rem;
  z-index: 2;
  background: var(--red);
  transform: skew(-7deg);
  a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    border-bottom: 1px solid var(--black, black);
    grid-template-columns: auto 1fr;
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Navigation />
    </HeaderStyles>
  );
}
