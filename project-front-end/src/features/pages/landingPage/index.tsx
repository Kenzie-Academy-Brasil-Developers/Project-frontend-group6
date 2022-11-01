import { BgStyled, DivInfos, LogoStyled, PLandingStyled, TitleLandingStyled, DivButtonsLandingStyled, ButtonLandingStyled } from './styles';

export const LandingPage = () => {
  return (
    <BgStyled>
      <LogoStyled />
      <DivInfos>
        <TitleLandingStyled>Você está precisando realizar serviços de manutenção em casa?</TitleLandingStyled>
        <PLandingStyled>Entre já no nosso site e resolva todos os seus problemas! </PLandingStyled>
        <DivButtonsLandingStyled>
          <ButtonLandingStyled>Quero conhecer</ButtonLandingStyled>
          <ButtonLandingStyled>Fazer login</ButtonLandingStyled>
        </DivButtonsLandingStyled>
      </DivInfos>
    </BgStyled>
  )
    

};
