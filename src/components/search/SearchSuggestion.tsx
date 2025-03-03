import styled from "styled-components";

export const SearchSuggestion = () => {
  return(
    <Container>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 880px;
  height: auto;
  max-height: 440px;
  padding: 15px 10px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: 5;
`;
