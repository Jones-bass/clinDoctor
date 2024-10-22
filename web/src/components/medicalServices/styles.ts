import { darken } from "polished";
import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  
  text-align: center;
  padding: 2% 0;
  margin-top: 5%;
`;

export const Title = styled.h1`
  font-family: 'Lato', sans-serif;
  color: ${(props) => props.theme.blue_dark};
  font-size: 36px;
`;

export const Description = styled.p`
  color: ${(props) => darken(0.1, props.theme.gray)};
  font-size: 18px;
  margin-bottom: 5%;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; 
  margin-top: 20px;
`;

export const ListItem = styled.div`
  width: 100%;
  max-width: 20%; 
  border: 1px solid ${(props) => props.theme.blue_dark}; 
  border-radius: 12px; 
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px); 
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); 
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ItemTitle = styled.h4`
  color: ${(props) => props.theme.blue_dark};

  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ItemDescription = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 16px;
  line-height: 1.5;
`;
