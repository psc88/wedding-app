import { FC } from 'react'
import { HeaderWeddingContainer } from '../headerWeddingContainer'
import { MainWeddingContainer } from '../mainWeddingContainer'
import { FooterWeddingContainer } from '../footerWeddingContainer'
import { SCWeddingContainer } from './weddingContainer.styles'

export const WeddingContainer: FC= () => {
  return (
      <SCWeddingContainer>
        <HeaderWeddingContainer/>
        <MainWeddingContainer/>
        <FooterWeddingContainer/>
      </SCWeddingContainer>
  )
}
