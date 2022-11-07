import styled, { css } from "styled-components";

const subTitle = css`
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 1rem;
`;

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

  .boxDescription {
    > p {
      ${subTitle}
    }

    > div {
      background-color: var(--white-color);
      padding: 2rem;
      border-radius: 8px;
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
