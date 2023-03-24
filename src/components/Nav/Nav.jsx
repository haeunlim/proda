import styled from "styled-components";

const Navigation = styled.nav`
  max-height: calc(100% - 50px);
  overflow-y: auto;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;
