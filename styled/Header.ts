import styled from "styled-components";

export const Nav = styled.nav`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding-top: 0.5rem;
  padding-bottom: 0.5rem; */
  border-bottom: 1px solid #eaeaea;
`;

export const GroupLarge = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Search = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 1px solid #eaeaea;
  padding-left: 1rem;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 8%);
`;

export const Button = styled.button`
  padding: 0 1rem;
  height: 2.2rem;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 0.4rem;
  :hover {
    cursor: pointer;
    background-color: #eaeaea;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const BlueButton = styled(Button)`
  background-color: #3996dd;
  color: #fff;
  :hover {
    background-color: #217cc2;
  }
`;

export const GroupSmall = styled(GroupLarge)`
  width: fit-content;
  gap: 0.5rem;
  height: 2.3rem;
  padding-right: 0.4rem;
  border-right: 0.1rem solid #eaeaea;
`;
