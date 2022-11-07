import styled from "styled-components";

export const DashStyled = styled.main`
  display: flex;
  justify-content: space-between;

  @media (max-width: 975px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;

export const ProposalStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-size: 36px;
    font-weight: bold;
    color: var(--primary-color);
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;

    background-color: var(--grey1-color);

    width: 460px;
    height: 700px;

    border-radius: 8px;

    overflow-y: overlay;

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;

      :hover {
        background-color: var(--primary-color);
      }
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    & > li {
      display: flex;
      gap: 1rem;
      padding: 1rem;

      background-color: var(--white-color);

      border-radius: 8px;

      height: 150px;
      width: 395px;

      position: relative;
      & > figure {
        & > img {
          width: 102px;
          height: 102px;
        }
      }

      & > div {
        & > h3 {
          font-size: 16px;
          font-weight: bold;
          color: var(--primary-color);

          margin-bottom: 0.3rem;
        }
        & > p {
          font-size: 16px;
          font-weight: 400;
          color: var(--black-color);
          height: 48%;
          overflow-y: overlay;

          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: transparent;

            :hover {
              background-color: var(--primary-color);
            }
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      }
      & > button {
        position: absolute;
        bottom: 0.7rem;
        right: 1rem;

        background-color: var(--primary-color);
        color: var(--white-color);

        font-size: 16px;
        font-weight: bold;

        border: solid 2px var(--primary-color);
        border-radius: 8px;

        padding: 0.3rem 1rem;

        transition: 0.5s;

        &:hover {
          background-color: var(--white-color);
          color: var(--primary-color);
          transition: 0.5s;
        }
      }
    }
  }
`;

export const FProposalStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & > h2 {
    font-size: 36px;
    font-weight: bold;
    color: var(--primary-color);
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2rem;

    background-color: var(--grey1-color);

    width: 680px;
    height: 700px;

    border-radius: 8px;

    overflow-y: overlay;

    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: transparent;

      :hover {
        background-color: var(--primary-color);
      }
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    & > li {
      display: flex;
      gap: 1rem;
      padding: 1rem;

      background-color: var(--white-color);

      border-radius: 8px;

      height: 330px;
      width: 100%;

      position: relative;
      & > figure {
        & > img {
          width: 102px;
          height: 102px;
        }
      }

      & > div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        & > h3 {
          font-size: 16px;
          font-weight: bold;
          color: var(--primary-color);
        }
        & > span {
          font-size: 16px;
          font-weight: 400;
          color: var(--black-color);
          height: 16%;
          overflow-y: overlay;

          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: transparent;

            :hover {
              background-color: var(--primary-color);
            }
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }
        }
        & > p {
          font-size: 16px;
          font-weight: 400;
          color: var(--black-color);
          height: 60%;
          overflow-y: overlay;

          ::-webkit-scrollbar {
            width: 10px;
            height: 10px;
          }

          ::-webkit-scrollbar-thumb {
            background: transparent;

            :hover {
              background-color: var(--primary-color);
            }
          }

          ::-webkit-scrollbar-track {
            background: transparent;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    & > ul {
      width: 460px;
    }
  }
`;
