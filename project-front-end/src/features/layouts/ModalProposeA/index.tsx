import { Button } from "../../../components/Buttons"
import { ModalStyled } from "../../../components/Modal/styles"
import { ModalProposeStyle } from "../ModalProposeA/styles"


interface IModalProps {
   setShowModal : React.Dispatch<React.SetStateAction<boolean>>;
   showModal : boolean;
}

export const ModalProposeA = ({setShowModal,showModal}:IModalProps) => {
   return (
      <ModalStyled>
         <ModalProposeStyle>
            <div>
               <div>
                  <h3>Troca de chuveiro</h3>
                  <button onClick={()=> setShowModal(!showModal)}>X</button>
               </div>
               <p>Necessito de uma troca de chuveiro, pois o antigo quebrou</p>
            </div>
            <div>
               <h3>Contato do contratante</h3>
               <p><span>mail@mail.com</span> - <span>(XX) XXXXX-XXXX</span></p>
            </div>
            <div>
               <Button type="button" variant="secondary">Recusar</Button>
               <Button type="button" variant="primary">Aceitar</Button>
            </div>
         </ModalProposeStyle>
      </ModalStyled>
   )
}