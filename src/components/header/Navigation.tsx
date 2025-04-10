import styled from "styled-components";

export const Navigation = () => {
  return(
    <nav>
      <Menu>
        <MenuItem>
          <MenuLink href="/">Home</MenuLink>
        </MenuItem>
        <MenuItem className="menu-item">
          <MenuLink href="/">Series</MenuLink>
        </MenuItem>
        <MenuItem className="menu-item">
          <MenuLink href="/">Movies</MenuLink>
        </MenuItem>
      </Menu>
    </nav>
  )
};

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuLink = styled.a`
  font-family: 'Lato', sans-serif;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: #f2f2f2;
  text-decoration: none;
`;
