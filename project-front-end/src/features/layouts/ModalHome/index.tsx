import { ModalStyled } from "../../../components/Modal/styles"
import { LinkStyled, SecStyled } from "./styles"

export const ModalHome = ({isModal, setIsModal}:any) => {
    return (
        <ModalStyled>
            <SecStyled>
                <button onClick={()=>setIsModal(!isModal)}>X</button>
                <h2>Para acessar as informações detalhadas de nossas colaboradoras é necessário estar conectado à plataforma.</h2>
                <LinkStyled to="/register">Cadastrar</LinkStyled>
            </SecStyled>
        </ModalStyled>
    )
}