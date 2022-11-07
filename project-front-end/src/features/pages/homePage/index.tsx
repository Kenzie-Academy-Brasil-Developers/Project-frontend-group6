import * as S from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../../components/Buttons";
import { Header } from "../../layouts/Header";
import { useState } from "react";
import { ModalHome } from "../../layouts/ModalHome";

export const HomePage = () => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <Header>
        <Link to="/register">Cadastrar</Link>
      </Header>
      <S.StyledHome>
        <h2 className="homeTitle">Encontre aqui as opções mais seguras</h2>
        <ul>
          <li>
            <figure>
              <img src="/src/assets/woman.png" alt="woman" />
            </figure>
            <h2>Maria</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit placeat
              quas unde neque voluptate deleniti. quidem qui quaerat corrupti
              optio, quisquam dolores, hic minus expedita accusantium, labore
              voluptatibus nisi eos esse!.
            </p>
            <Button
              type="button"
              variant="terciary"
              onClick={() => setIsModal(!isModal)}
            >
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
      </S.StyledHome>

      {isModal && <ModalHome isModal={isModal} setIsModal={setIsModal} />}
    </>
  );
};
