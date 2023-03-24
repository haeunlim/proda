import styled, { css } from "styled-components";

function isCurrent(to) {
  return window.location.pathname.startsWith(to);
}

const Link = styled.a`
  display: block;
  padding: 14px 0;
  font-size: 13px;
  color: #454545;
`;

function NavLink({ children, to }) {
  return (
    <li>
      <Link href={to} aria-current={isCurrent(to) ? "page" : null}>
        {children}
      </Link>
    </li>
  );
}

export default NavLink;
