import styled from "styled-components";

interface IFormStyled {
  maxWidth: number
}

export const FormStyled = styled.div<IFormStyled>`
  border-radius: 4px;
  width: 100%;
  padding: 1rem;
  max-width: ${({ maxWidth }) => maxWidth}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #f8f7f4;
`;

export const FormTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 35px;
    color: #341099;
  }
`;

export const ImgLogo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  h2 {
    font-size: 25px;
    color: #341099;
  }
`;
