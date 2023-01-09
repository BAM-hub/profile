import styled from "styled-components";

export const SwiperContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Card = styled.div`
  display: flex;
  border: 1px solid #e3f0fb;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  min-width: 50%;
  max-width: calc(clamp(12vw, 150px, 200px) + 5rem);
  /* min-width: 20rem; */
  border-radius: 10px;
  box-shadow: 0px 3px 28px rgb(211 226 234 / 15%);
`;
export const AvatarWrapper = styled.div`
  width: clamp(12vw, 150px, 200px);
  height: clamp(12vw, 150px, 200px);
  overflow: hidden;
  border-radius: 400px;
  img {
    object-fit: cover;
    width: clamp(12vw, 150px, 200px);
    height: clamp(12vw, 150px, 200px);
  }
`;

export const DetailWrapper = styled.div`
  /* height: 6rem; */
  /* max-width: 20rem; */
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  /* border: 1px solid black; */
`;

export const Text = styled.p`
  font-weight: 800;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
`;

export const TextLight = styled.p`
  font-weight: 300;
  color: rgb(211 226 234);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
`;

export const RatingWrapper = styled.div`
  width: 4rem;
  height: 2rem;
  border: 1px solid #d3d3d3;
  border-radius: 4rem;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 1px 0.5rem;
`;

export const ArrowRight = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #e3f0fb;
  border-radius: 0 1rem 1rem 0;
  width: fit-content;
  :hover {
    border: 1px solid #486df6;
    transition: all 0.3s ease-in-out;
  }
`;

export const ArrowLeft = styled.div`
  padding: 1rem 1.5rem;
  border: 1px solid #e3f0fb;
  border-radius: 1rem 0 0 1rem;
  width: fit-content;
  :hover {
    border: 1px solid #486df6;
    transition: all 0.3s ease-in-out;
  }
`;

export const Flex = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 1rem;
`;
