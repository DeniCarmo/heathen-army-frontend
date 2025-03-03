import styled from "styled-components"
import { Logo } from "../header/Logo"
import { Navigation } from "../header/Navigation"
import { SearchSuggestion } from "../search/SearchSuggestion"
import { Search } from "./Search"

export const Header = () => {
  return(
    <HeaderEl>
      <HeaderWrapper>
        <Logo/>
        <Search />
        <Navigation />
        <SearchSuggestion />
      </HeaderWrapper>
    </HeaderEl>
  )
}

const HeaderEl = styled.header`
  height: auto;
  min-height: 35px;
  background-color: #272727;
  padding: 8px 0;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: auto;
  margin-left: auto;
`;
