import styled from 'styled-components'
import { mixins } from 'theme'

export const HEADER_HEIGHT_DESKTOP = 70
export const HEADER_HEIGHT_MOBILE = 50

export const Header = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 100%;
  max-height: ${HEADER_HEIGHT_DESKTOP}px;
  background-color: ${({ theme }) => theme.colors.base_80};
  box-shadow: 0 -10px 25px ${({ theme }) => theme.colors.base_100};
  z-index: ${({ theme }) => theme.index.top + 1};

  ${mixins.isMobile()} {
    max-height: ${HEADER_HEIGHT_MOBILE}px;
  }
`

export const Container = styled.div`
  ${mixins.defaultGrid()}
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-top: ${({ theme }) => theme.spaces.space1};
  padding-bottom: ${({ theme }) => theme.spaces.space1};

  ${mixins.isMobile()} {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export const Title = styled.a`
  ${mixins.h0()}
  color: ${({ theme }) => theme.colors.base_0};
  font-weight: 400;
  text-align: center;
  
  &: hover { text-decoration: none; }
  
  ${mixins.isMobile()} {
    ${mixins.h1()}
    font-weight: 400;
  }
`
