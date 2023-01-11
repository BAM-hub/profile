import styled from "styled-components";

export const Nav = styled.nav`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const GroupLarge = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 992px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const Search = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid #eaeaea;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 8%);
`;

export const Button = styled.button`
  padding: 0.8rem 1rem;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 0.4rem;
  font-size: 1rem;
  font-weight: 400;
  :hover {
    cursor: pointer;
    background-color: #eaeaea;
    transition: all 0.2s ease-in-out;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const BlueButton = styled(Button)`
  background-color: #3996dd;
  color: #fff;
  :hover {
    background-color: #217cc2;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export const GroupSmall = styled(GroupLarge)`
  width: fit-content;
  gap: 0.5rem;
  height: 2.3rem;
  padding-right: 0.4rem;
  padding-left: 0.4rem;

  border-right: 0.1rem solid #eaeaea;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  @media screen and (max-width: 992px) {
    width: 25%;
    padding-right: 0.8rem;
    padding-left: 0.8rem;
    a {
      gap: 1rem;
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
    width: 15%;
  }
`;

export const Ham = styled.button`
  display: flex;
  margin-left: 10px;
  margin-right: 10px;
`;

export const FullWidth = styled.div`
  width: 100%;
  border-bottom: 3px solid #eaeaea;
`;
