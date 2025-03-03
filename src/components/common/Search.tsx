import { useState } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleQueryChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }

  return(
    <Wrapper>
      <SearchInput type="text" onChange={e => handleQueryChange(e)} value={query} placeholder="O que procura?" />
      <SearchButton>
        <IconContext.Provider value={{color: '#fff', size: '20px'}}>
          <BsSearch />
        </IconContext.Provider>
      </SearchButton>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SearchInput = styled.input`
  font-size: 14px;
  line-height: 14px;
  font-weight: 400;
  color: #272727;
  width: 100%;
  height: auto;
  min-height: 35px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0;
  padding-left: 15px;

  &::placeholder {
    font-size: 14px;
    line-height: 14px;
    font-weight: 400px;
    color: #636363;
  }
`;

const SearchButton = styled.button`
  width: 35px;
  height: 35.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #ff009c 60%, #ff30cb);
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 0;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate3d(0, -50%, 0);
  z-index: 2;
  cursor: pointer;
`;
