import styled, { css } from "styled-components";

const disCollum = css`
   display: flex;
   flex-direction: column;

`

export const EditProfile = styled.div`
   width: 100%;
   background-color: var(--grey1-color);
   border-radius: 12px;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 45px;
   position: relative;

   /* terciary */

   > form {

      display: grid;
      grid-template-areas:
        "A B"
        "A C";
      column-gap: 68px;
      align-items: center;
      justify-items: center;

      @media(max-width: 690px) {
         display: flex;
         flex-direction: column;
         padding-bottom: 50px;
         
      }

      > button{
         position: absolute;
         right: 30px;
         bottom: 30px;

         @media(max-width: 690px) {
            
         }
      }
      
      > div:nth-child(1){
         display: flex;
         flex-direction: column;
         grid-area: A; 
      }

      > div:nth-child(2){
         height:fit-content;
         grid-area: B;
      }

      > div:nth-child(3){
         display: flex;
         flex-direction: column;
         align-items: center;
         grid-area: C;
      }
   }


         .GroupCheck{
            display: flex;
            flex-direction: row;
         }


         .collum1{
            ${disCollum}
         }


         .collum2{
            ${disCollum}
         }

         ${disCollum}
      
         .BoxProfile {
            img{
               border-radius: 50%;
               width: 272px;
            }

            @media(max-width: 690px) {
            order: -1;
            }
         }
`