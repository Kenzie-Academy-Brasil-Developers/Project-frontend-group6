import styled from "styled-components";

const StyledHome = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  .homeTitle {
    margin: 2rem 0;
  }
  ul {
    background-color: var(--grey1-color);
    padding: 1rem;
    border-radius: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    li {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--white-color);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.2rem;
      figure {
        border-radius: 50%;
        overflow: hidden;
        width: 8rem;
        img {
          max-width: 100%;
        }
      }
      p {
        text-align: center;
      }
      /* button {
        padding: 0.4rem 1rem;
        font-weight: bold;
        background-color: var(--primary-color);
        color: var(--white-color);
        border-radius: 4px;
        :hover {
          transition: 0.5s;
          background-color: transparent;
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
      } */
    }
  }

  @media (min-width: 460px) {
    ul {
      li {
        width: 16rem;
      }
    }
  }
`;

export default StyledHome;
