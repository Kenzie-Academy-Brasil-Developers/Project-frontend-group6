import { Link } from "react-router-dom";
import styled from "styled-components";
// import bg from '../../../../src/assets/';

export const BgStyled = styled.div`
    background-image: linear-gradient(#2D00AC71, #2D00AC71, #2D00AC71), url("../../../../src/assets/bgLandingPage.png");
    background-size: cover;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    gap: 3rem;

    @media (max-width: 600px) {
        background-image: linear-gradient(#2D00AC71, #2D00AC71, #2D00AC71), url("../../../../src/assets/bgLandingPageMobile.png");
        flex-direction: column;
        justify-content: space-evenly;
    }
`

export const LogoStyled = styled.div`
    background-image: url("../../../../src/assets/logowhite.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 40rem;
    height: 300px;

    @media (max-width: 426px){
        width: 18rem;
        height: 200px;
    }
`
export const DivInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 35rem;
    align-items: center;
    text-align: center;

    @media (max-width: 426px){
        width: 18rem;
        width: 90%;
    }
`
export const TitleLandingStyled = styled.h1`
    font-size: 2.2rem;
    color: var(--white-color);

    @media (max-width: 426px){
        font-size: 1.8rem;
    }
`

export const PLandingStyled = styled.p`
    font-size: 0.8rem;
    color: var(--white-color);
    font-weight: 500;
`

export const DivButtonsLandingStyled = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 426px){
        margin-top: 30px;
    }
`

export const ButtonLandingStyled = styled.button`
    width: 140px;
    height: 50px;
    font-size: 14px;
    border-radius: 8px;
    color: var(--primary-color);
    font-weight: 700;
`