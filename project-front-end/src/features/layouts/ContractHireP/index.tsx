import * as S from "./styles";
import { Button } from "../../../components/Buttons";
import { ModalProfileHire } from "../ModalProfileHire";

export const ContractHireP = () => {
  return (
    <>
      <S.ProfileHireStyle>
        <div className="HeaderContent">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
              alt=""
            />
            <h3>Name</h3>
          </div>
          <div>
            <p>Competencias</p>
            <ul>
              <li>
                <span>Eletrica</span>
              </li>
              <li>
                <span>Eletrica</span>
              </li>
              <li>
                <span>Eletrica</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="boxDescription">
          <p>Descrição</p>
          <div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
            </p>
          </div>
        </div>
        <div className="boxRatings">
          <p>Recomendações</p>
          <div>
            <ul>
              <li>
                <h4>Nome do Contratante</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore, eum sapiente, facilis dolores nulla mollitia, rem
                  possimus assumenda quidem inventore quasi repellat itaque!
                  Iusto quis blanditiis amet vel, possimus unde?
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="boxButton">
          <Button type="button" variant="quaternary">
            Voltar
          </Button>
          <Button type="button" variant="terciary">
            Contratar
          </Button>
        </div>
      </S.ProfileHireStyle>
      <ModalProfileHire />
    </>
  );
};
