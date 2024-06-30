import styled from 'styled-components';

export const Main = styled.main`
  max-width: calc(100vw - 16px);
  margin: 0 auto;
  padding: 0 22px;
  height: calc(100vh - 10rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background: linear-gradient(100deg, rgba(10, 155, 105, 1) 50%, #0463FA 100%);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Section = styled.section`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 2.5%;
`;

export const Logo = styled.img`
  width: 50%;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 70%;
    margin: 0 auto 1.5rem;
  }
`;

export const HighlightSpan = styled.h1`
  width: 90%;
  margin-bottom: 1rem;
  font-family: 'Baloo';
 
  font-size: clamp(1.25rem, 1.25vw + 1.25rem, 2.5rem);
  text-align: justify;
  line-height: 1.2;
 
  color: ${(props) => props.theme.background};
`;

export const Description = styled.p`
  font-size: clamp(0.65rem, 0.65vw + 0.65rem, 1.25rem);
  margin-bottom: 1%;

  color: ${(props) => props.theme.background};
`;

export const MedicImage = styled.img`
  width: 30%;
  height: auto;
  border-radius: 8px;
  box-shadow: 10px 10px 10px 0px ${(props) => props.theme.textTitle};

  @media (max-width: 768px) {
    margin: 2rem auto 0;
    width: 80%;
  }
`;
