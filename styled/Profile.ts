import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(250px, 1fr) 2.5fr;
  width: 75%;
  margin: auto;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    width: 100%;
  }
`;

export const ProfileSummary = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding: 1rem;
    align-items: center;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

export const DoctorImageContainer = styled.div`
  /* margin-left: -10px; */
`;

export const Marker = styled.div`
  /* display: block; */
  min-width: 0.3rem;
  height: 0.6rem;
  background: #3996dd;
`;

export const InformationCard = styled.div`
  width: 100%;
  padding: 2rem 3rem;
  box-shadow: 0 2px 10px 0 rgb(102 118 131 / 15%);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  > ul > li {
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin: auto;
  }
`;

export const ProfileInformation = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  gap: 1rem;
`;

export const PaddingLeft = styled.div`
  padding-left: 10px;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 10px;
`;

export const TextLarge = styled.p`
  font-size: 2rem;
  font-weight: 500;
`;

export const TextGroup = styled.div`
  padding: 0.5rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #6b6b6b;
`;

export const DescriptionLight = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  color: #6b6b6b;
`;

export const LinkButton = styled.div`
  color: white;
  background: #3996dd;
  padding: 0.8rem 1.6rem;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
  }
  :hover {
    background: #217cc2;
    > a {
      text-decoration: underline;
    }
    > img {
      transform: translateX(5px);
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const SectionUnderLine = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  gap: 0.5rem;
  padding-bottom: 10px;
  border-bottom: 1px solid #d3d3d3;
`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* @media screen and (max-width: 768px) {
    justify-content: unset;
    gap: 5rem;
  } */
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
`;
