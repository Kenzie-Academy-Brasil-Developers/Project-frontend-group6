import styled, { css } from "styled-components";

const subTitle = css`
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const TitlePage = styled.h2`
  color: var(--primary-color);
  margin: 10px 0;
`

export const ProfileHireStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  background-color: var(--grey1-color);
  border-radius: 12px;
  padding: 50px;

  .HeaderContent {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    @media (max-width: 520px) {
      flex-direction: column;
    }

    > div:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      @media (max-width: 520px) {
        flex-direction: column;
      }

      > img {
        width: 250px;
      }

      > h3 {
        font-size: 36px;
      }
    }

    > div:nth-child(2) {
      width: 100%;
      max-width: 500px;

      @media (max-width: 1000px) {
        max-width: fit-content;
      }

      > p {
        ${subTitle}
      }

      > ul {
        display: flex;
        background-color: var(--white-color);
        height: 90px;
        gap: 4rem;
        border-radius: 8px;
        padding: 1rem;
        overflow-x: auto;
        align-items: center;

        > li {
          width: fit-content;
          height: fit-content;
          border: 1px solid var(--primary-color);
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          font-weight: bold;
          color: var(--primary-color);
        }
      }
    }
  }

  a {
    background-color: var(--white-color);

    border-radius: 8px;

    transition: 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 140px;
    height: 48px;

    font-size: 16px;
    font-weight: bold;
    color: var(--primary-color);

    :hover {
      transition: 0.5s;

      background-color: transparent;
      border: 2px solid var(--white-color);
    }
  }

  .boxDescription {
    > p {
      ${subTitle}
    }

    > div {
      background-color: var(--white-color);
      padding: 2rem;
      border-radius: 8px;

      @media(max-width: 600px){
        overflow: auto;
        height: 145px;
      }

      > h2 {
        text-align: center;
        color: var(--primary-color);
      }
    }
  }

  .boxRatings {
    > p {
      ${subTitle}
    }

    > div {
      > ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--white-color);
        padding: 1rem;
        height: 150px;
        border-radius: 8px;
        overflow-y: auto;

        > li {
          background-color: var(--grey1-color);
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-radius: 8px;
          position: relative;
          
          >h4{
            position: absolute;
            top: 25px;
            left: 75px;

            @media(max-width: 600px){
              width: 95px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }


        > h2 {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--primary-color);
        }
      }
    }
  }

  .boxButton {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    > button:nth-child(1) {
      :hover {
        color: var(--primary-color);
      }
    }
  }
`;
