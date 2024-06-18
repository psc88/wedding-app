import { FC } from 'react'
import { SCHeaderContainer, SCIcon, SCNavbar, SCTitle } from './headerWeddingContainer.style'

export const HeaderWeddingContainer: FC = () => {
  return (
    <SCHeaderContainer>
      <SCNavbar>
        <SCIcon></SCIcon>
        <SCTitle>P&F</SCTitle>
      </SCNavbar>
    </SCHeaderContainer>
  )
}
