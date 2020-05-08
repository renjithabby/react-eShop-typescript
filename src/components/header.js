/** @jsx jsx */
import { Link } from "@reach/router";
import { css, jsx } from "@emotion/core";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "blue",
        },
      };
    }}
  />
);

const navStyle = css`
  position: absolute;
  right: 0;
  display: flex;
  right: 1rem;
  flex-direction: row;
  font-size: 1.6rem;
  justify-content: flex-right;
  align-items: center;
  height: 4rem;
  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    right: 2rem;
  }
  @media only screen and (min-width: 1024px) {
    right: 5rem;
  }
`;

const headerStyle = css`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  margin: 0 auto;
  max-width: 128rem;
  padding: 2rem 1rem;

  @media only screen and (min-width: 768px) {
    padding: 5rem 2rem;
  }
  @media only screen and (min-width: 1024px) {
    padding: 5rem 5rem;
  }
`;
const navLinkStyle = css`
  margin-left: 2rem;
`;

const Header = () => {
  return (
    <header css={headerStyle}>
      <h1>eShop</h1>
      <nav css={navStyle}>
        <NavLink to="/" css={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="favourites" css={navLinkStyle}>
          Favourites
        </NavLink>
        <NavLink to="basket" css={navLinkStyle}>
          Basket
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
