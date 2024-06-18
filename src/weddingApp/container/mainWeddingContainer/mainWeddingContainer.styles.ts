import styled from 'styled-components'
import manos from '../../../assets/manos.jpeg'
import { colors } from '../../../constants/colors'

export const SCMainContainer = styled.div`
  background-image: url(${manos});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${colors.white2};
  gap: 16px;
`

export const Container = styled.div`
  display: flex;
  font-size: 24px;
`

export const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-width: 80px;
`

export const Separator = styled.span`
  margin: 0 10px;
`

export const SCTitle = styled.span`
  font-family: Roboto;
  font-size: 40px;
  font-weight: 400;
`

export const SCInformationComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white1};
  border-radius: 30px;
  padding: 16px;
  box-shadow: 0 0 10px ${colors.transparent};
  max-width: 85%;
  gap: 8px;
`

export const SCInformation = styled.div`
  text-align: center;
  color: black;
  max-width: 100%
`

export const SCInformationDate = styled.div`
  color: black;
  font-size: 40px;
  text-align: center;
  width: 100%;
`

export const SCVerticalLine = styled.div`
  border-left: 1px solid black;
  height: 100px;
`