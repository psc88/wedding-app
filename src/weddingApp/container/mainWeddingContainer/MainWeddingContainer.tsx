import { FC } from 'react'
import {
  Column,
  Container,
  SCInformation,
  SCInformationComponent,
  SCInformationDate,
  SCMainContainer,
  SCTitle,
  Separator,
  SCVerticalLine,
} from './mainWeddingContainer.styles';

export const MainWeddingContainer: FC = () => {
  return (
    <SCMainContainer>
      <Container>
        <Column>
          <span>{'20'}</span>
          <span> Días</span>
        </Column>
        <Separator>:</Separator>
        <Column>
          <span>{'30'}</span>
          <span> Horas</span>
        </Column>
        <Separator>:</Separator>
        <Column>
          <span>{'60'}</span>
          <span> Minutos</span>
        </Column>
      </Container>
      <SCTitle>Pablo y Flor</SCTitle>
      <SCInformationComponent>
        <SCInformation>
          NO HAY MEJOR COMPAÑIA PARA CELEBRAR EN LA META, QUE LA QUE ESTUVO EN
          EL CAMINO
        </SCInformation>
        <SCVerticalLine />
        <SCInformationDate>05/04/25</SCInformationDate>
      </SCInformationComponent>
    </SCMainContainer>
  );
};
