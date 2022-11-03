import StyledHome from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/buttons";
import { Header } from "../../layouts/header";

export const HomePage = () => {
  return (
    <>
      <Header>
        <Link to="/register">Cadastrar</Link>
      </Header>
      <StyledHome>
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
        <ul>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Button type="button" variant="terciary">
              Abrir
            </Button>
          </li>
        </ul>
      </StyledHome>
    </>
  );
};
