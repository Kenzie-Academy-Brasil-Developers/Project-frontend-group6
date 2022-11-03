import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginStyled = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-color);
`;

export const FormLogin = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 1.5rem;
`;

export const CampRedirectRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 16px;
  padding: 0 0 2rem;

  p {
    color: #000;
  }
`;

export const SpanRegister = styled(Link)`
  text-decoration: underline;
  color: var(--primary-color);
`;
