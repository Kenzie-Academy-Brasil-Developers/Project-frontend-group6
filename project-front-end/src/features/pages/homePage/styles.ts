import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  margin: 0 auto;

  .topMenu {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      color: var(--primary-color);
    }

    @media (min-width: 460px) {
      margin: 2rem 0;
      justify-content: space-between;
      flex-direction: row;
    }

    .filterWorker {
      display: flex;
      justify-content: space-evenly;
      gap: 1rem;
    }

    #workerLocation {
      margin-left: 1rem;
    }
  }

  ul {
    background-color: var(--grey1-color);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    height: 752px;
    overflow-y: auto;

    li {
      padding: 1rem;
      width: 100%;
      border-radius: 8px;
      background-color: var(--white-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.4rem;
      height: max-content;

      h2 {
        text-align: center;
        max-width: 14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 30px;
      }

      p {
        text-align: center;
        max-width: 14rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 40px;
      }
    }
  }

  @media (min-width: 460px) {
    ul {
      width: 100%;
      li {
        width: 16rem;
      }
    }
  }
`;
